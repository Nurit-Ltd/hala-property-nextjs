"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const VerifyEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const verificationCode = Object.values(data).join(""); // Combine inputs to form the verification code
    console.log("Verification Code:", verificationCode);
  };

  return (
    <div className="py-[60px] lg:py-36 font-Manrope bg-white min-h-[70vh] flex items-center justify-center">
      <div className="p-[20px] xl:p-[30px] w-full max-w-[596px] mx-auto bg-white border border-transparent formBoxShadow md:border-[#CBD5E0] rounded-2xl">
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-xl xl:text-[32px] font-bold tracking-[-4%] mt-4 text-gray-900">Verify your email</h4>
          <p className="text-base text-center text-gray-700 my-2">We have sent a code to your email johns*****@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex justify-between items-center mt-8 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                {...register(`code${index}`, {
                  required: true,
                  validate: () => {
                    // Check if all fields have values
                    const values = getValues();
                    return Object.values(values).every((value) => value);
                  },
                })}
                className="w-12 lg:w-14 h-12 lg:h-14 appearance-none border rounded-lg text-center focus:outline-none text-black font-bold text-2xl focus:border-black transition"
              />
            ))}
          </div>
          {errors && errors.code0 && <p className="text-red-500 text-center">Please enter the complete code.</p>}

          <button type="submit" className="w-full py-3 px-4 bg-primary submitBtnShadow mt-3 mb-4 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none tracking-[2%]">
            Verify Account
          </button>

          <p className="text-center mt-4">
            Resend code in <span className="text-primary font-semibold">59:00</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;

// <div className="     py-[60px] lg:py-36 font-Manrope bg-white min-h-[70vh] flex items-center justify-center ">
//   <div className=" p-[20px] xl:p-[30px] w-full max-w-[596px] mx-auto bg-white border border-transparent     formBoxShadow  md:border-[#CBD5E0] rounded-2xl   mb-4">
//     <div className="flex flex-col items-center  gap-4">
//       <h4 className="text-xl xl:text-[32px]   font-bold tracking-[-4%] mt-4   text-gray-900 ">Verify your email</h4>
//       <p className=" text-base text-center text-gray-700 my-2">We have send code to your email johns*****@gmail.com</p>
//     </div>

//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <div className="flex justify-between items-center mt-8 gap-2">
//         <input type="text" className="w-12 lg:w-14 h-12 lg:h-14 appearance-none border rounded-lg text-center focus:outline-none focus:shadow-outline text-black font-bold text-2xl focus:border-black focus-within:border-black transition" maxLength={1} />
//         <input type="text" className="w-12 lg:w-14 h-12 lg:h-14 appearance-none border rounded-lg text-center focus:outline-none focus:shadow-outline text-black font-bold text-2xl focus:border-black focus-within:border-black transition" maxLength={1} />
//         <input type="text" className="w-12 lg:w-14 h-12 lg:h-14 appearance-none border rounded-lg text-center focus:outline-none focus:shadow-outline text-black font-bold text-2xl focus:border-black focus-within:border-black transition" maxLength={1} />
//         <input type="text" className="w-12 lg:w-14 h-12 lg:h-14 appearance-none border rounded-lg text-center focus:outline-none focus:shadow-outline text-black font-bold text-2xl focus:border-black focus-within:border-black transition" maxLength={1} />
//         <input type="text" className="w-12 lg:w-14 h-12 lg:h-14 appearance-none border rounded-lg text-center focus:outline-none focus:shadow-outline text-black font-bold text-2xl focus:border-black focus-within:border-black transition" maxLength={1} />
//         <input type="text" className="w-12 lg:w-14 h-12 lg:h-14 appearance-none border rounded-lg text-center focus:outline-none focus:shadow-outline text-black font-bold text-2xl focus:border-black focus-within:border-black transition" maxLength={1} />
//       </div>

//       <div>
//         {/* Submit Button */}
//         <button type="submit" className="w-full py-3 px-4 bg-primary submitBtnShadow mt-3 mb-4 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none tracking-[2%] focus:shadow-outline">
//           Verify Account
//         </button>
//       </div>

//       {/* Switch between Sign In and Sign Up */}
//       <p className="text-center   mt-4">
//         Resend code in{" "}
//         <button type="button" onClick={() => setIsSignUp(!isSignUp)} className="text-primary hover:text-blue-700  font-semibold">
//           59:00
//         </button>
//       </p>
//     </form>
//   </div>
// </div>