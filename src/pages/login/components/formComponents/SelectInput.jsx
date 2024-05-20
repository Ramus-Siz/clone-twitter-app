import React from "react";
import ErrorMessage from "./ErrorMessage.jsx";
import { forwardRef } from "react";

const SelectInput = forwardRef(({ label, dataArray, error, ...props }, ref) => {
  return (
    <div className="relative w-full mb-4">
      <label className="block text-sm font-medium text-gray-700" htmlFor="">
        {label}
      </label>

      <select
        ref={ref}
        className=" input-login-signup-update bg-black py-4 border-2 border-solid border-white text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
      >
        {dataArray.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
      <ErrorMessage message={error} />
    </div>
  );
});
export default SelectInput;
