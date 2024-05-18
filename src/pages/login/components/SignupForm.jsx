import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "./formComponents/InputForm";
import axios from "axios";
import { BASE_API_URL } from "../../../utils/baseUrl.config";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigation = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        `${BASE_API_URL}/api/auth/signup`,
        data
      );
      if (response.status === 201) {
        console.log("Bien enrregistré");
        navigation("/updateForm");
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
          register={register("email", {
            required: "Please fill a valid email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please fill a valid email",
            },
          })}
          error={errors.email?.message}
        />
        <InputForm
          type="text"
          placeholder="Username"
          label="Username"
          register={register("username", {
            required: "Username must be unique",
          })}
          error={errors.username?.message}
        />
        <InputForm
          type="password"
          placeholder="Password"
          label="Password"
          register={register("password", {
            required: "At least 8 characters",
            minLength: {
              value: 8,
              message: "At least 8 characters",
            },
          })}
          error={errors.password?.message}
        />
        <InputForm
          type="password"
          placeholder="Password again"
          label="Password again"
          register={register("passwordAgain", {
            required: "Passwords must match",
            validate: (value) => value === password || "Passwords must match",
          })}
          error={errors.passwordAgain?.message}
        />
      </div>
      <button
        type="submit"
        className="bg-white w-full px-4 py-4 mt-3 flex gap-4 justify-center items-center rounded-full font-bold text-[#1d9bf0]"
      >
        Continue
      </button>
    </form>
  );
}
