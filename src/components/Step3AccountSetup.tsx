"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Step3AccountSetup() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  return (

    <div className="space-y-4">
      <h2 className="text-xl text-black dark:text-white font-semibold">Account Setup</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Username</label>
        <input
          {...register("accountSetup.username")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {errors.accountSetup?.username && (
          <p className="mt-1 text-sm text-red-600">
            {errors.accountSetup.username.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Password</label>
        <div className="relative flex items-center">
        <input
          type={showPassword1 ? "text" :"password"}
          {...register("accountSetup.password")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        <div onClick={() => {setShowPassword1(!showPassword1)}} className="absolute cursor-pointer w-fit h-fit right-3">
          {showPassword1 ? <FaEye size={15} color="black" /> : <FaEyeSlash size={15} color="black"/>}
        </div>
        </div>
        
        {errors.accountSetup?.password && (
          <p className="mt-1 text-sm text-red-600">
            {errors.accountSetup.password.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Confirm Password</label>
        <div className="relative flex items-center">
        <input
          type={showPassword2 ? "text" :"password"}
          {...register("accountSetup.confirmPassword")}
          className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
         <div onClick={() => {setShowPassword2(!showPassword2)}} className="absolute cursor-pointer w-fit h-fit right-3">
          {showPassword2 ? <FaEye size={15} color="black"/> : <FaEyeSlash size={15} color="black"/>}
        </div>
        </div>
        {errors.accountSetup?.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">
            {errors.accountSetup.confirmPassword.message as string}
          </p>
        )}
      </div>
    </div>
  );
}