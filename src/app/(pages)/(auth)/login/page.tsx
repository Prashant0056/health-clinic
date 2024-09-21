"use client"

import LoginForm from "@/components/login/loginForm";




const Login=()=>{
    return (
        <div className="bg-background text-black dark:text-white h-full flex flex-col justify-center gap-6 animate-fade-in-custom">
            <div className="text-center pt-36">
                <h1 className="text-[2em] ">Login</h1>
            </div>
            <div className=" px-4">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login;