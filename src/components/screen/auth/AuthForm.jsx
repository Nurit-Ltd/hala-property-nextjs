"use client";
// LOGIN / SIGNUP PAGE
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

// Internal imports
import logo from "@/assets/home/logo-main.svg";

const AuthForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    router.push("/verify-email"); // Redirect to verify email page
  };

  return (
    <div className=" p-[20px] xl:p-[30px] w-full max-w-[596px] mx-auto bg-white border border-transparent     formBoxShadow  md:border-[#CBD5E0] rounded-2xl   mb-4">
      <Link href={"/"} className="flex flex-col items-center  gap-4">
        <Image src={logo} alt="mainLogo" className="w-8 h-8 xl:w-11 xl:h-11" />
        <h4 className="text-[32px]   font-bold tracking-[-4%] mt-4   text-gray-900 ">Hala Property</h4>
        <p className=" text-base text-center text-gray-700 my-2">Simplifying property searches with cutting-edge AI technology</p>
      </Link>
      <div className="flex justify-between items-center gap-4 mt-8 ">
        <button type="submit" className="w-full flex justify-center items-center gap-2 text-base text-center text-gray-700 py-3 px-4   hover:text-white hover:bg-blue-500  transition  font-semibold h-[52px]     rounded-lg border border-[#E4E7EC] focus:outline-none focus:shadow-outline">
          <FcGoogle />
          <span className="hidden md:block">Sign In with </span> Google
        </button>
        <button type="submit" className="w-full flex justify-center items-center gap-2 text-base text-center text-gray-700 py-3 px-4   hover:text-white hover:bg-blue-500   font-semibold h-[52px]     rounded-lg border border-[#E4E7EC] focus:outline-none focus:shadow-outline">
          <FaApple />
          <span className="hidden md:block">Sign In with </span> Apple
        </button>
      </div>
      <div className=" my-6 ">
        <div className="flex items-center justify-between gap-4">
          <div className="border-t border-[#E4E7EC] flex-1 "></div>
          <p className="text-sm  text-[#687588]">Or with email{!isSignUp && "/ phone"}</p>
          <div className="border-t border-[#E4E7EC] flex-1 "></div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name (only for Sign Up) */}
        {isSignUp && (
          <div>
            <label className="block text-gray-700 text-sm  font-semibold   mb-2">Full Name</label>
            <input type="text" {...register("fullName", { required: "Full Name is required" })} className="  appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#E8EAED] placeholder:text-[#9AA0A6] placeholder:text-base h-[48px] " placeholder="Full Name" />
            {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName.message}</p>}
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-gray-700 text-sm  font-semibold   mb-2">{isSignUp ? "Email" : "Email or phone"}</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="  appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 border-[#E8EAED] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#9AA0A6] placeholder:text-base  h-[48px] "
            placeholder={isSignUp ? "Email Address" : "Email or phone"}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>

        {/* Phone (only for Sign Up) */}
        {isSignUp && (
          <div>
            <label className="block text-gray-700  font-semibold   text-sm  mb-2">Phone</label>
            <input type="tel" {...register("phone", { required: "Phone is required" })} className="  appearance-none border rounded-lg w-full py-3 px-3 border-[#E8EAED] text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#9AA0A6] placeholder:text-base  h-[48px] " placeholder="Phone number " />
            {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
          </div>
        )}

        {/* Password */}
        <div className="relative">
          <label className="block text-gray-700 text-sm  font-semibold   mb-2">Password</label>
          <input type={showPassword ? "text" : "password"} {...register("password", { required: "Password is required" })} className=" border-[#E8EAED] appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#9AA0A6] placeholder:text-base  h-[48px] " placeholder="Password" />
          <div className="absolute bottom-[15px] right-3 flex items-center">
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaRegEyeSlash className="text-[#9AA0A6]" /> : <FaRegEye className="text-[#9AA0A6]" />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
        </div>

        {/* Confirm Password (only for Sign Up) */}
        {isSignUp && (
          <div className="relative">
            <label className="block text-gray-700 text-sm  font-semibold   mb-2">Confirm Password</label>
            <input type={showConfirmPassword ? "text" : "password"} {...register("confirmPassword", { required: "Please confirm your password", validate: (value) => value === getValues("password") || "Passwords do not match" })} className="  appearance-none border border-[#E8EAED] rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#9AA0A6] placeholder:text-base  h-[48px] " placeholder="Retype Password" />
            <div className="absolute bottom-[15px] right-3 flex items-center">
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaRegEyeSlash className="text-[#9AA0A6]" /> : <FaRegEye className="text-[#9AA0A6]" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
          </div>
        )}

        {/* Remember Me Checkbox */}
        {/* Forgot Password */}
        {!isSignUp && (
          <div className="flex justify-between items-center">
            <div className="flex items-center customCheckboxContainer">
              <input id="rememberme" type="checkbox" {...register("rememberMe")} className="mr-2 font-medium leading-tight customCheckbox " />
              <label htmlFor="rememberme" className="text-base">
                Remember me
              </label>
            </div>

            <div className="text-right">
              <a href="#" className="text-base text-primary hover:text-blue-500 transition">
                Forgot Password?
              </a>
            </div>
          </div>
        )}

        <div>
          {/* Submit Button */}
          <button type="submit" className="w-full py-3 px-4 bg-primary submitBtnShadow mt-3 mb-4 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none tracking-[2%] focus:shadow-outline">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>

        {/* Switch between Sign In and Sign Up */}
        <p className="text-center   mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button type="button" onClick={() => setIsSignUp(!isSignUp)} className="text-primary hover:text-blue-700  font-semibold  h-[48px] ">
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
