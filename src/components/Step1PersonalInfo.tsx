"use client";

import { useFormContext } from "react-hook-form";

export default function Step1PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-black dark:text-white font-semibold">Personal Information</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Full Name</label>
        <input
          {...register("personalInfo.fullName")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {errors.personalInfo?.fullName && (
          <p className="mt-1 text-sm text-red-600">
            {errors.personalInfo.fullName.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
        <input
          type="email"
          {...register("personalInfo.email")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {errors.personalInfo?.email && (
          <p className="mt-1 text-sm text-red-600">
            {errors.personalInfo.email.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Phone Number</label>
        <input
          {...register("personalInfo.phoneNumber")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {errors.personalInfo?.phoneNumber && (
          <p className="mt-1 text-sm text-red-600">
            {errors.personalInfo.phoneNumber.message as string}
          </p>
        )}
      </div>
    </div>
  );
}