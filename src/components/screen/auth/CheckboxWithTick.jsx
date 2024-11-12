import React from "react";
import { useForm } from "react-hook-form";
import { TiTick } from "react-icons/ti";

export default function CheckboxWithTick() {
  const { register } = useForm();

  return (
    <div className="flex items-center">
      <input id="rememberMe" type="checkbox" {...register("rememberMe")} className="hidden" />
      <label htmlFor="rememberMe" className="mr-2 h-5 w-5 border-2 border-red-500   rounded-sm cursor-pointer flex items-center justify-center">
        {/* Checkmark */}
        <span className="hidden checked:block w-full h-full text-white">✓</span>
      </label>
      <span className="leading-tight">Remember Me</span>
    </div>
  );
}
