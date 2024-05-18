import React from "react";
import Modal from "../login/components/Modal";

export default function Update() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <main className="flex h-screen justify-center items-center">
      <button
        onClick={() => {
          setModalOpen(true);
        }}
        className="bg-[#1d9bf0] w-56 px-4 py-4 mt-3 flex gap-4 justify-center items-center rounded-full font-bold text-white"
      >
        Edit profile
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} usedFor={"update"} />}
    </main>
  );
}
