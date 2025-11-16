"use client"
import AuthCard from "@/components/AuthCard";
import { BACKEND_URL } from "@/config/backend";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Signin(){
    
    const navigate = useRouter()
    const handleSignIn = async({username,password})=>{
        const response = await axios.post(`${BACKEND_URL}/signin`,{
            username:username,
            password:password
        })
        const jwt = response.data.Authorization 
        console.log(response.data.username)
        localStorage.setItem("username",JSON.stringify(response.data.username))
        localStorage.setItem("Authorization",jwt)
        navigate.push("/")
    }

    return (
        <>
            <div className="w-screen h-[calc(100vh-64px)] z-30 flex items-center justify-center">
                <AuthCard title={"Signin"} buttonType1={"Signin"} buttonType2={"Create new account"} authClick={handleSignIn} navigateClick={()=>(navigate.push("/signup"))}/>  
            </div>
        </>
    )
}