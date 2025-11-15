"use client"
import { useRouter } from "next/navigation"
export const NavBar = () => {
    const navigate = useRouter()
    return (
        <>
            <div className="top-0 fixed  h-16 w-full bg-neutral-900 flex items-center justify-between px-8 border-b-[0.5px] border-teal-900">
                <div onClick={()=>(navigate.push("/"))} className="text-teal-500 cursor-pointer font-bold text-2xl">
                    Shorty URL
                </div>
                <div className="flex items-center justify-between gap-8  font-medium text-lg transition duration-200">
                    <button onClick={()=> (navigate.push("/signin"))} className="text-teal-500 px-4 py-1 rounded-2xl hover:text-teal-200 text-shadow-2xl cursor-pointer hover:scale-110 transition duration-200">login</button>
                    <button onClick={()=> (navigate.push("/signup"))} className="text-teal-500 px-4 py-1 rounded-2xl hover:text-teal-200 text-shadow-2xl cursor-pointer hover:scale-110 transition duration-200">signup</button>
                </div>
            </div>
        </>
    )
} 