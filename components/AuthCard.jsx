"use client";
import { useRef, useState } from "react";

const AuthCard = ({ title, buttonType1, buttonType2,authClick,navigateClick }) => {
  const passwordRef = useRef();
  const userRef = useRef();
  const [passwordState, setPasswordState] = useState(false);
  const [password, setPassword] = useState(false);
  const [username, setUsername] = useState(false);

  const seePassword = () => {
    setPasswordState((prev) => !prev);
  };

  const handleAuthClick = () =>{
    authClick({username, password})
  } 

  return (
    <div className="relative h-[35vw] w-[40vw] bg-neutral-900 rounded-4xl flex items-center justify-center flex-col">
      <h1 className=" absolute top-15 text-teal-300 text-4xl">{title}</h1>
      <div className="h-16 w-[80%] flex flex-col items-start gap-4 justify-center mb-8">
        <label className="text-xl">Username</label>
        <input
          className="bg-white w-full h-full rounded-lg border-2 focus:outline-none text-black border-teal-300 placeholder:text-gray-500 p-2 text-lg "
          type="text"
          placeholder="Username"
          ref={userRef}
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>
      <div className="h-18 w-[80%] flex flex-col items-start gap-4 justify-center mb-12">
        <label className="text-xl">Password</label>
        <div className="w-full h-full flex gap-1 bg-white rounded-xl border-2 border-teal-300 ">
          <input
            className="bg-white w-[90%] h-full rounded-lg focus:outline-none text-black placeholder:text-gray-500 p-2 text-lg "
            type={password ? "text" : "password"}
            placeholder="Password"
            ref={passwordRef}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button
            type="button"
            className="cursor-pointer"
            onClick={seePassword}
          >
            {passwordState ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-eye-icon lucide-eye"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-eye-closed-icon lucide-eye-closed"
              >
                <path d="m15 18-.722-3.25" />
                <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                <path d="m20 15-1.726-2.05" />
                <path d="m4 15 1.726-2.05" />
                <path d="m9 18 .722-3.25" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <button onClick={handleAuthClick}
        className="w-[32vw] px-4 py-2 bg-teal-500 hover:bg-teal-400 hover:border-teal-400 text-black font-semibold rounded-shadow-lg transition-all duration-200 cursor-pointer mb-3 rounded-md border-black border"
      >
        {buttonType1}
      </button>
      <button onClick={navigateClick}
        className="w-[32vw] px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-teal-300 font-medium  border border-teal-700 hover:border-neutral-800 rounded-md shadow transition-all duration-200 cursor-pointer"
      >
        {buttonType2}
      </button>
    </div>
  );
};

export default AuthCard;
