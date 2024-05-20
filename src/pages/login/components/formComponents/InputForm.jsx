import React from "react";
import ErrorMessage from "./ErrorMessage";
import { forwardRef } from "react";
const InputForm = forwardRef(
  ({ type, placeholder, label, error, ...register }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          {...register}
          ref={ref}
          className=" input-login m-0 block h-[58px] w-full rounded border border-solid border-white  px-3 py-4  font-normal   focus:border-[#1d9bf0]"
          placeholder={placeholder}
        />
        {/* <label className="pointer-events-none left-0 top-0 origin-[0_0]  border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
          {label}
        </label> */}
        {error && <ErrorMessage message={error} />}
      </div>
    );
  }
);
export default InputForm;
