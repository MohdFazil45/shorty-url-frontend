"use client"
import AuthCard from "@/components/AuthCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/config/backend";

export default function Signup(){
    const navigate = useRouter()
    const handleSignUp = async ({username, password})=>{
        const response =await axios.post(`${BACKEND_URL}/signup`,{
            username:username,
            password:password
        })
        navigate.push("/signin")
        alert(response.data.msg)
    }
    return (
        <>
            <div className="w-screen h-[calc(100vh-64px)] z-30 flex items-center justify-center">
                <AuthCard title={"Signup"} buttonType1={"Signup"} buttonType2={"Already have an account"} authClick={handleSignUp} navigateClick={()=>(navigate.push("/signin"))}/>  
            </div>
        </>
    )
}