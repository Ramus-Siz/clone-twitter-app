import React from "react";
import ErrorMessage from "./ErrorMessage.jsx";

export default function TextArea({ placeholder, label, error }) {
  return (
    <div className=" w-full relative" data-twe-input-wrapper-init>
      <textarea
        className="peer block min-h-[auto] w-full rounded border border-solid bg-transparent bg-clip-padding px-3 py-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlTextarea1"
        rows={3}
        placeholder={placeholder}
      ></textarea>
      <label className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
        {label}
      </label>
      <ErrorMessage message={error} />
    </div>
  );
}
