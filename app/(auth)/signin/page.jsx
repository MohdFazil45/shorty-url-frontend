"use client"
import AuthCard from "@/components/AuthCard";
import { useRouter } from "next/navigation";
export default function Signin(){
    const navigate = useRouter()
    return (
        <>
            <div className="w-screen h-[calc(100vh-64px)] z-30 flex items-center justify-center">
                <AuthCard title={"Signin"} buttonType1={"Signin"} buttonType2={"Create new account"} authClick={()=>{}} navigateClick={()=>(navigate.push("/signup"))}/>  
            </div>
        </>
    )
}