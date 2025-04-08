"use client";

import { useState } from "react";
import { FormValues } from "../lib/validationSchema";
type FormSection = {
  personalInfo: FormValues['personalInfo'];
  addressDetails: FormValues['addressDetails'];
  accountSetup: FormValues['accountSetup'];
};

export function useMultiStepForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Partial<FormValues>>({
    personalInfo: undefined,
    addressDetails: undefined,
    accountSetup: undefined,
  });

  const updateFormData = <T extends keyof FormSection>(
    section: T,
    values: FormSection[T]
  ) =>{
    setData((prev) => ({
      ...prev,
      [section]: values,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return {
    step,
    nextStep,
    prevStep,
    data,
    updateFormData,
    isFirstStep: step === 1,
    isLastStep: step === 4,
  };
}