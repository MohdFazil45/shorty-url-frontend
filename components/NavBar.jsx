"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LogOut from "./LogOut";
export const NavBar = () => {
  const navigate = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const checkAuthStatus = () => {
    const authStatus = !!(
      localStorage.getItem("Authorization") || localStorage.getItem("token")
    );
    setIsLoggedIn(authStatus);
  };

  useEffect(() => {
    checkAuthStatus()
    window.addEventListener('storage', checkAuthStatus);

    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };

  }, []);

  const profile = () => {
    setShowProfile((e) => !e);
  };

  return (
    <>
      <div className="top-0 fixed  h-16 w-full bg-neutral-900 flex items-center justify-between px-8 border-b-[0.5px] border-teal-900">
        {showProfile && (
          <div className="top-30 left-[85vw] relative">
            <LogOut onlogout={()=>{
                setIsLoggedIn(false)
            }}/>
          </div>
        )}
        <div
          onClick={() => navigate.push("/")}
          className=" text-teal-500 cursor-pointer font-bold text-2xl"
        >
          Shorty URL
        </div>
        {isLoggedIn ? (
          <button onClick={profile} className="flex cursor-pointer">
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
              className="lucide lucide-circle-user-round-icon lucide-circle-user-round"
            >
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx="12" cy="10" r="4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </button>
        ) : (
          <div className="flex items-center justify-between gap-8  font-medium text-lg transition duration-200">
            <button
              onClick={() => navigate.push("/signin")}
              className="text-teal-500 px-4 py-1 rounded-2xl hover:text-teal-200 text-shadow-2xl cursor-pointer hover:scale-110 transition duration-200"
            >
              login
            </button>
            <button
              onClick={() => navigate.push("/signup")}
              className="text-teal-500 px-4 py-1 rounded-2xl hover:text-teal-200 text-shadow-2xl cursor-pointer hover:scale-110 transition duration-200"
            >
              signup
            </button>
          </div>
        )}
      </div>
    </>
  );
};
