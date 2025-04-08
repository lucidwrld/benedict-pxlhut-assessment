"use client";

import { useFormContext } from "react-hook-form";

export default function Step2AddressDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-black dark:text-white font-semibold">Address Details</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Street Address</label>
        <input
          {...register("addressDetails.streetAddress")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {errors.addressDetails?.streetAddress && (
          <p className="mt-1 text-sm text-red-600">
            {errors.addressDetails.streetAddress.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">City</label>
        <input
          {...register("addressDetails.city")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {errors.addressDetails?.city && (
          <p className="mt-1 text-sm text-red-600">
            {errors.addressDetails.city.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Zip Code</label>
        <input
          {...register("addressDetails.zipCode")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {errors.addressDetails?.zipCode && (
          <p className="mt-1 text-sm text-red-600">
            {errors.addressDetails.zipCode.message as string}
          </p>
        )}
      </div>
    </div>
  );
}