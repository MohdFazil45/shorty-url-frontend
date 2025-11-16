"use client";

import LogOut from "@/components/LogOut";
import { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState();
  const getInputValue = () => {
    setInputValue(inputRef.current?.value);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-teal-500 font-bold text-7xl">Shorty URL</h1>
      <p className="text-gray-500 mt-4">
        Shortens your url with <span className="text-teal-500">Shorty URL</span>{" "}
        for free.
      </p>
      <div className="w-1/2 h-10 overflow-hidden bg-red-100 flex items-center justify-center mt-12 rounded-lg border-2 border-teal-500">
        <input
          onChange={getInputValue}
          ref={inputRef}
          className="w-[85%] bg-white focus:outline-none text-black p-2 placeholder:text-gray-600"
          type="text"
          placeholder="Paste your Url"
        />
        <button className="w-[17%] h-full bg-teal-500 text-black text-shadow-lg text-lg font-medium cursor-pointer hover:bg-teal-400 transition duration-200">
          {inputValue ? "Shortens Url" : "Paste Url"}
        </button>
      </div>
      <div className="w-1/4 h-8 bg-white mt-10 flex items-center justify-between p-2 text-black text-lg">
        {"https://shorty-sldahf"}
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
          className="lucide lucide-copy-icon lucide-copy cursor-pointer"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      </div>
    </div>
  );
}

