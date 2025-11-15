"use client"
import AuthCard from "@/components/AuthCard";
import { useRouter } from "next/navigation";
export default function Signup(){
    const navigate = useRouter()
    return (
        <>
            <div className="w-screen h-[calc(100vh-64px)] z-30 flex items-center justify-center">
                <AuthCard title={"Signup"} buttonType1={"Signup"} buttonType2={"Already have an account"} authClick={()=>{}} navigateClick={()=>(navigate.push("/signin"))}/>  
            </div>
        </>
    )
}