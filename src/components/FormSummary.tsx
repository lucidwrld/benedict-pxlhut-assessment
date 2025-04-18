"use client";

import { FormValues } from "../lib/validationSchema";

export default function FormSummary({ data }: { data: FormValues }) { 
  return (
    <div className="  p-4 rounded-md text-black dark:text-white">
      <h3 className="text-xl font-semibold mb-2">Summary</h3>
      
      <div className="space-y-2 px-4">
        <h4 className="font-medium ">Personal Information</h4>
        <div className="pb-2 pl-6">
          <p>Name: <span className="text-[12px]">{data?.personalInfo.fullName}</span></p>
          <p>Email: <span className="text-[12px]">{data?.personalInfo.email}</span></p>
          <p>Phone: <span className="text-[12px]">{data?.personalInfo.phoneNumber}</span></p>
        </div>
        
        
        <h4 className="font-medium mt-4">Address Details</h4>
        <div className="pb-2 pl-6">
          <p>Street: <span className="text-[12px]">{data?.addressDetails.streetAddress}</span> </p>
          <p>City: <span className="text-[12px]">{data?.addressDetails.city}</span></p>
          <p>Zip Code: <span className="text-[12px]">{data?.addressDetails.zipCode}</span></p>
        </div>
        
        
        <h4 className="font-medium mt-4">Account Setup</h4>
        <div className="pb-2 pl-6">
          <p>Username: <span className="text-[12px]">{data?.accountSetup.username}</span></p>
        </div>
        
      </div>
    </div>
  );
}