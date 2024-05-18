import React from "react";
import { Link } from "react-router-dom";
import InputForm from "../login/components/formComponents/InputForm.jsx";
import TextArea from "../login/components/formComponents/TextArea.jsx";
import SelectInput from "../login/components/formComponents/SelectInput.jsx";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_API_URL } from "../../utils/baseUrl.config.js";

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const years = Array.from({ length: 85 }, (_, i) => i + 1940);

export default function UpdateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const getUser = sessionStorage.getItem("userWithInfos");
  const userWithInfos = JSON.parse(getUser);
  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `${BASE_API_URL}/api/users/update/handle/${userWithInfos.handle}`,
        data
      );

      console.log("Update succeful");

      sessionStorage.setItem("userWithInfos", JSON.stringify(response.data));
    } catch (error) {
      console.log("update : ", error);
    }
  };

  return (
    <div className="h-[600px] flex flex-col justify-start">
      <h2 className=" font-bold text-3xl">Update your profile</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-end gap-6 mt-4"
      >
        <InputForm
          type="text"
          placeholder="Name"
          label="Name"
          error={errors.name && "Please, fill a name"}
          {...register("name", { required: "Please, fill a name" })}
        />
        <InputForm
          type="text"
          placeholder="Username"
          label="Username"
          error={errors.username && "Username must be unique"}
          {...register("username", { required: "Username must be unique" })}
        />
        <InputForm
          type="email"
          placeholder="Email address"
          label="Email address"
          error={errors.email && "Please, fill a valid email address"}
          {...register("email", {
            required: "Please, fill a valid email address",
          })}
        />
        <TextArea
          placeholder="Votre bio"
          label="Bio"
          error={errors.bio && "Le champ ne peut être vide"}
          {...register("bio", { required: "Le champ ne peut être vide" })}
        />
        <InputForm
          type="text"
          placeholder="Location"
          label="Location"
          error={errors.location && "Please, give a valid address"}
          {...register("location", {
            required: "Please, give a valid address",
          })}
        />
        <div className=" w-full flex flex-col gap-2">
          <span>Birthday</span>
          <div className="flex gap-2">
            <div className="w-1/3">
              <SelectInput
                label="Day"
                dataArray={days}
                error={errors.day && "Select a day"}
                {...register("day", { required: "Select a day" })}
              />
            </div>
            <div className="w-1/3">
              <SelectInput
                label="Month"
                dataArray={months}
                error={errors.month && "Select a month"}
                {...register("month", { required: "Select a month" })}
              />
            </div>
            <div className="w-1/3">
              <SelectInput
                label="Year"
                dataArray={years}
                error={errors.year && "Select a year"}
                {...register("year", { required: "Select a year" })}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="hidden">
          Submit
        </button>
      </form>
    </div>
  );
}
