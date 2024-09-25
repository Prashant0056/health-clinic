import { Button } from "../ui/button";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
import createClient from "@/utils/supabase/client";

const supabase=createClient()

const LogoutButton=()=>{

    const router = useRouter()

    const onClick=async()=>{
            const {error} = await supabase.auth.signOut()

            if(error)
                toast.error("Something went wrong")
            else
            {
                toast.success('Logged out successfully')
                router.replace('/login')
            }

    }
    return(
        <>
        <Button onClick={onClick}>
            Logout
        </Button>
        <Toaster richColors/>
        </>
    )
}

export default LogoutButton;