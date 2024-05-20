import React, { useState } from "react";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";
const FooterLinks = [
  "About",
  "Download the X app",
  "Help Centre",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Accessibility",
  "Ads info",
  "Blog",
  "Careers",
  "Brand Resources",
  "Advertising",
  "Marketing",
  "X for Business",
  "Developers",
  "Directory",
  "Settings",
];
export default function Login() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUseFor, setModalUseFor] = useState("");
  const year = new Date().getFullYear();

  return (
    <main className=" h-screen flex flex-col">
      <div className="mx-8 my-5 md:mx-28 md:my-5 lg:m-0 flex flex-col lg:flex lg:flex-row lg:h-full lg:justify-center lg:items-center">
        <div className="lg:flex lg:justify-center lg:items-center lg:h-full lg:w-7/12">
          <img src="/x_logo.png" alt="Logo x.com" className="h-14 lg:h-96" />
        </div>

        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:h-full lg:w-5/12 ">
          <h1 className="text-[3rem] md:text-[4rem] md:w-32 lg:w-0 lg:text-[4.5rem] font-extrabold my-8">
            Happening now
          </h1>
          <span className="text-2xl font-bold md:text-3xl mb-4">
            Join today.
          </span>

          <div className="w-full md:w-2/3 lg:w-1/2 space-y-10">
            <div className="space-y-3">
              <button className="bg-white w-full text-white px-4 py-2 mt-3 flex gap-4 justify-center items-center rounded-full">
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
                <span className="font-bold text-black">
                  Sign up with Google
                </span>
              </button>

              <button className="bg-white w-full text-white px-4 py-2 mt-3 flex gap-4 justify-center items-center rounded-full">
                <svg
                  fill="#000000"
                  width="20px"
                  height="20px"
                  viewBox="-52.01 0 560.035 560.035"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
                </svg>
                <span className="font-bold text-black">Sign up with Apple</span>
              </button>

              <div className="mt-3 relative gap-2 flex items-center">
                <hr className="flex-grow border-t border-gray-700" />
                <span className="text-sm">or</span>
                <hr className="flex-grow border-t border-gray-700" />
              </div>

              <button
                onClick={() => {
                  setModalOpen(true);
                  setModalUseFor("signup");
                }}
                className="bg-[#1d9bf0] w-full px-4 py-2 mt-3 flex gap-4 justify-center items-center rounded-full"
              >
                <span className="font-bold text-white">Create account</span>
              </button>

              <p className="text-xs font-light termsOfUse">
                By signing up, you agree to the <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>, including{" "}
                <a href="#">Cookie Use.</a>
              </p>
            </div>

            <div>
              <span className="">Already have an account?</span>

              <button
                onClick={() => {
                  setModalOpen(true);
                  setModalUseFor("signin");
                }}
                className="border-white border-[1px] w-full px-4 py-2 mt-3 flex gap-4 justify-center items-center rounded-full"
              >
                <span className="font-bold text-[#1d9bf0]">Sign in</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-8 my-5  lg:m-0 mt-10 lg:mb-4">
        <div className=" text-center space-x-6 lg:flex lg:justify-between lg:mx-5 lg:space-x-3 ">
          {FooterLinks.map((link, index) => (
            <a
              href={`/${link}`}
              className=" hover:underline text-sm font-light opacity-50"
              key={index}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className=" hover:underline text-sm font-light opacity-50"
          >
            © {year} X Corp.
          </a>
        </div>
      </footer>

      {modalOpen && <Modal setOpenModal={setModalOpen} usedFor={modalUseFor} />}
    </main>
  );
}
