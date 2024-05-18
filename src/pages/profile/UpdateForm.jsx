import React from "react";
import { Link } from "react-router-dom";
import InputForm from "../login/components/formComponents/InputForm.jsx";
import TextArea from "../login/components/formComponents/TextArea.jsx";
import SelectInput from "../login/components/formComponents/SelectInput.jsx";

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
  return (
    <div className="h-[600px] flex flex-col justify-start">
      <h2 className=" font-bold text-3xl">Update your profile</h2>
      <div className="flex flex-col items-end gap-6 mt-4 ">
        <InputForm
          type="text"
          placeholder="Name"
          label="Name"
          error={"Please, fill a name"}
        />
        <InputForm
          type="text"
          placeholder="Username"
          label="Username"
          error={"Username must be unique"}
        />
        <InputForm
          type="email"
          placeholder="Email address"
          label="Email address"
          error={"Please, fill a valid email address"}
        />
        <TextArea
          placeholder="Votre bio"
          label="Bio"
          error={"Le champ ne peut être vide"}
        />
        <InputForm
          type="text"
          placeholder="Location"
          label="Location"
          error={"Please, give a valid address"}
        />

        <div className=" w-full flex flex-col gap-2">
          <span>Birthday</span>
          <div className="flex gap-2">
            <div className="w-1/3">
              <SelectInput
                label="Day"
                dataArray={days}
                error={"Select a day"}
              />
            </div>
            <div className="w-1/3">
              <SelectInput
                label="Month"
                dataArray={months}
                error={"Select a month"}
              />
            </div>
            <div className="w-1/3">
              <SelectInput
                label="Year"
                dataArray={years}
                error={"Select a year"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
