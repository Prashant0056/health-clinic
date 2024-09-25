"use client"

import ResetForm from "@/components/forgot-password/SendResetRequest";



const ForgotPassword=()=>{
    return(
        <div className="bg-background h-full pt-[25vh] text-black dark:text-white flex flex-col gap-9">
               <ResetForm/>
               <p className="text-center text-popover-foreground">You will receive an e-mail to reset your password</p>
        </div>
    )
}

export default ForgotPassword;