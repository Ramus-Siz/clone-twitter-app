import React from "react";
import InputForm from "./formComponents/InputForm";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_API_URL } from "../../../utils/baseUrl.config";
import { useAuth } from "../../../authContext";

export default function SigninForm() {
  const { signin, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigate();

  const onSubmit = async (data) => {
    const success = await signin(data);
    if (success) {
      navigation("/home");
    } else {
      console.log("Signin failed");
    }
  };
  return (
    <div className="h-[500px] flex flex-col justify-start">
      <h2 className=" font-bold text-3xl">Login to X</h2>
      <div className=" space-y-5">
        <button className="bg-white w-full text-white px-4 py-4 mt-3 flex gap-4 justify-center items-center rounded-full">
          <svg
            width="20px"
            height="20px"
            viewBox="-3 0 262 262"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              fill="#4285F4"
            />
            <path
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              fill="#34A853"
            />
            <path
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              fill="#FBBC05"
            />
            <path
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              fill="#EB4335"
            />
          </svg>
          <span className="font-bold text-black">Sign in with Google</span>
        </button>

        <button className="bg-white w-full text-white px-4 py-4 mt-3 flex gap-4 justify-center items-center rounded-full">
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="-52.01 0 560.035 560.035"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
          </svg>
          <span className="font-bold text-black">Sign in with Apple</span>
        </button>
      </div>
      <div className="mt-3 relative gap-2 flex items-center">
        <hr className="flex-grow border-t border-gray-700" />
        <span className="text-sm">or</span>
        <hr className="flex-grow border-t border-gray-700" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full md:h-[500px] flex flex-col justify-between "
      >
        <h2 className="font-bold text-3xl">Login to your account</h2>
        <div className="flex flex-col items-end gap-4 mt-4">
          <InputForm
            type="email"
            placeholder="exemple@domain.com"
            label="email"
            error={errors.email && "No account with this name"}
            {...register("email", {
              required: "No account with this name",
            })}
          />
          <InputForm
            type="password"
            placeholder="Password"
            label="Password"
            error={errors.password && "At least 8 characters"}
            {...register("password", {
              required: "At least 8 characters",
              minLength: { value: 8, message: "At least 8 characters" },
            })}
          />
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <svg
              className="animate-spin h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 0h2v4H2V0zM2 20h2v4H2v-4z"
              ></path>
            </svg>
            <p className="ml-2">Processing...</p>
          </div>
        ) : (
          <button
            type="submit"
            className="bg-white w-full px-4 py-4 mt-3 flex gap-4 justify-center items-center rounded-full font-bold text-[#1d9bf0]"
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
}
