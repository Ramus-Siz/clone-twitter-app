import React from "react";
import SignupForm from "./SignupForm";
import UpdateForm from "../../profile/UpdateForm.jsx";
import SigninForm from "./SigninForm";

export default function Modal({ setOpenModal, usedFor }) {
  const handleSaveClick = () => {
    // Soumettre le formulaire de mise à jour
    const updateForm = document.querySelector("form");
    updateForm &&
      updateForm.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
  };
  return (
    <div className="w-full h-full fixed flex justify-center items-center bg-[#242d34] bg-opacity-70 py-14">
      <div className=" w-full h-full md:w-[600px] md:h-[700px] lg:w-[500px] lg:h-[600px] md:rounded-xl bg-black shadow-xl flex flex-col px-6 overflow-y-auto">
        <div className="  flex justify-between">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="bg-transparent border-none text-base cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              fill="#fff"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          </button>
          <div className="lg:flex lg:justify-center lg:items-center lg:h-full ">
            <img src="public/x_favicon.png" alt="Logo x.com" className="h-12" />
          </div>
          {usedFor == "update" && (
            <button
              className="bg-white text-black text-base my-2 px-6 py-1 font-bold rounded-full cursor-pointer"
              onClick={handleSaveClick}
            >
              Save
            </button>
          )}
        </div>
        <div className=" md:mx-10 my-3">
          {(() => {
            switch (usedFor) {
              case "signup":
                return <SignupForm />;
              case "update":
                return <UpdateForm />;
              case "signin":
                return <SigninForm />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
