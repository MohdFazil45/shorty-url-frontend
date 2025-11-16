import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LogOut = ({onlogout}) => {
  const navigate = useRouter();
  const [user, setUser] = useState("");
  const userCardRef = useRef()
  const logout = () => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("username");
    window.dispatchEvent(new Event('storage'));
    userCardRef.current.classList.add("hidden")
    navigate.push("/");
  };
  useEffect(() => {
    const userData = localStorage.getItem("username");
    console.log(userData);
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData);
    }
  }, []);

  return (
    <>
      <div ref={userCardRef} className="h-36 w-40 bg-neutral-900 flex flex-col gap-2 items-center justify-center border border-teal-400 shadow-teal-400/20 rounded-xl">
        <div>Profile</div>
        <div className="flex gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-icon lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <div className="text-teal-500">{`${user}`}</div>
        </div>
        <div className="flex gap-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-log-out-icon lucide-log-out"
          >
            <path d="m16 17 5-5-5-5" />
            <path d="M21 12H9" />
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          </svg>
          <button className="text-teal-500 cursor-pointer" onClick={logout}>
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default LogOut;
