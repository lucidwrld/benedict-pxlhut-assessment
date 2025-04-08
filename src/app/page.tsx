"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValues } from "@/lib/validationSchema";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import FormProgress from "@/components/FormProgress";
import Step1PersonalInfo from "@/components/Step1PersonalInfo";
import Step2AddressDetails from "@/components/Step2AddressDetails";
import Step3AccountSetup from "@/components/Step3AccountSetup";
import FormSummary from "@/components/FormSummary";
import FormNavigation from "@/components/FormNavigation";
import { useMutation } from "@tanstack/react-query";
import ThemeToggle from "@/components/ThemeToggle";  
import { toast } from "react-toastify";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image"; 
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Home() {
  const [submittedSuccess, setSubmittedSuccess ] = useState(false)
  const {
    step,
    nextStep,
    prevStep,
    data,
    updateFormData,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm();

  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      personalInfo: data.personalInfo,
      addressDetails: data.addressDetails,
      accountSetup: data.accountSetup,
    },
    mode: "onBlur",
  }); 
 
  const { mutate: submitForm, isPending } = useMutation({
    mutationFn: async (values: FormValues) => {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      return await response.json();
    },
    onSuccess: (data) => { 
      toast.success("Form submitted successfully!");
      setSubmittedSuccess(true)
    },
    onError: (error) => { 
      toast.error("Submission failed. Please try again.");
    },
  });

  const onSubmitt = async (values: FormValues) => {
     

     try {
      const fieldNames = step === 1 
      ? ['personalInfo.fullName', 'personalInfo.email', 'personalInfo.phoneNumber']
      : step === 2
      ? ['addressDetails.streetAddress', 'addressDetails.city', 'addressDetails.zipCode']
      : ['accountSetup.username', 'accountSetup.password', 'accountSetup.confirmPassword'];
      const isValid = await methods.trigger(fieldNames);
 
    
    if (!isValid) {
      console.log("Validation failed, not proceeding");
      return;
    }
    updateFormData(
      step === 1 ? "personalInfo" : step === 2 ? "addressDetails" : "accountSetup",
      values
    );

      
      if (!isLastStep) {
        
        nextStep();
      } else {
        console.log("Logged Data in Console", values)
        submitForm(values);
      }
    } catch (error) { 
      toast.error("Form submission error:", error);
    }  
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    methods.trigger().then(isValid => {
      const formData = methods.getValues();
        onSubmitt(formData);
    });

  };
   

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
     {submittedSuccess ? 
     <div className="w-full max-w-md flex flex-col justify-center items-center gap-2 bg-gray-800 dark:bg-white rounded-lg shadow-md p-6">
         <DotLottieReact
            src="https://lottie.host/a937cbcc-1fc9-48e4-8579-9849ee3f9e74/IAqrSPBpAG.lottie"
            loop
            autoplay
          />
        <h3 className="flex items-center text-xl font-semibold text-white dark:text-black  gap-2">Thank you </h3>
     </div> : 
     <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <FormProgress currentStep={step} />
        
        <FormProvider {...methods}>
          <form  onSubmit={handleFormSubmit} className="space-y-6">
            {step === 1 && <Step1PersonalInfo />}
            {step === 2 && <Step2AddressDetails />}
            {step === 3 && <Step3AccountSetup />}
            
            {isLastStep && data.personalInfo && data.addressDetails && data.accountSetup && (
              <FormSummary data={data as FormValues} />
            )}
            
            <FormNavigation
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              onPrevClick={prevStep}
              isSubmitting={isPending}
            />
          </form>
        </FormProvider>
      </div>}
      <ThemeToggle />
    </main>
  );
}