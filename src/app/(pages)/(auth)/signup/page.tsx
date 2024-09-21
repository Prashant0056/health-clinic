"use client"

import LoginForm from "@/components/login/loginForm";
import SignupForm from "@/components/signup/signupForm";

const Signup=()=>{
    return(
        <div className="bg-background text-black dark:text-white h-full flex flex-col justify-center gap-6 animate-fade-in-custom">
            <div className="text-center pt-36">
                <h1 className="text-[2em] ">Sign-up</h1>
            </div>
            <div className=" px-4">
                <SignupForm/>
            </div>
        </div>
    )
}

export default Signup;