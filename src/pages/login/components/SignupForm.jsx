import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "./formComponents/InputForm";
import axios from "axios";
import { BASE_API_URL } from "../../../utils/baseUrl.config";
import { useAuth } from "../../../authContext";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigation = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_API_URL}/api/auth/signup`,
        data
      );
      if (response.status === 201) {
        console.log("Bien enrregistré");
        window.location.reload();
        setLoading(false);
      }
    } catch (error) {
      console.log("Signup: ", error);
    }
  };

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full md:h-[500px] flex flex-col justify-between"
    >
      <h2 className="font-bold text-3xl">Create your account</h2>
      <div className="flex flex-col items-end gap-4 mt-4 ">
        <InputForm
          type="email"
          placeholder="exemple@domain.com"
          label="Email address"
          {...register("email", {
            required: "Please fill a valid email",
          })}
          error={errors.email && "Please fill a valid email"}
        />
        <InputForm
          type="text"
          placeholder="Username"
          label="Username"
          {...register("username", {
            required: "Username must be unique",
          })}
          error={errors.username && "Username must be unique"}
        />
        <InputForm
          type="password"
          placeholder="Password"
          label="Password"
          {...register("password", {
            required: "At least 8 characters",
            minLength: {
              value: 8,
              message: "At least 8 characters",
            },
          })}
          error={errors.password && "At least 8 characters"}
        />
        <InputForm
          type="password"
          placeholder="Password again"
          label="Password again"
          {...register("passwordAgain", {
            required: "Passwords must match",
            validate: (value) => value === password || "Passwords must match",
          })}
          error={errors.passwordAgain && "Passwords must match"}
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
          Continue
        </button>
      )}
    </form>
  );
}
