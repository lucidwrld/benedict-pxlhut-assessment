"use client";

import { useFormErrors } from "@/hooks/useFormErrors";
import { useFormContext } from "react-hook-form";

export default function Step2AddressDetails() {
  const {
    register, 
  } = useFormContext();

  const { getError } = useFormErrors();
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-black dark:text-white font-semibold">Address Details</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Street Address</label>
        <input
          {...register("addressDetails.streetAddress")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {getError('addressDetails.streetAddress') && (
          <p className="mt-1 text-sm text-red-600">
            {getError('addressDetails.streetAddress')}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">City</label>
        <input
          {...register("addressDetails.city")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {getError('addressDetails.city') && (
          <p className="mt-1 text-sm text-red-600">
            {getError('addressDetails.city')}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Zip Code</label>
        <input
          {...register("addressDetails.zipCode")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {getError('addressDetails.zipCode') && (
          <p className="mt-1 text-sm text-red-600">
            {getError('addressDetails.zipCode')}
          </p>
        )}
      </div>
    </div>
  );
}