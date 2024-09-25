import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import supabase from "@/helpers/supabase";
import { toast, Toaster } from "sonner";



const formSchema = z.object({
    email: z.string().min(1,{message:"This field cannot be empty."}).email({message: "Enter a valid email."})
})

const ResetForm=()=>{
    const router = useRouter()
    const [isSendingMail,setIsSendingMail] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = async({email}: z.infer<typeof formSchema>)=>{
        
        setIsSendingMail(true)
        const {data,error} = await supabase.auth.resetPasswordForEmail(email,{
            redirectTo: process.env.NEXT_PUBLIC_UPDATE_PASS_URL
        })

        if(error)
        {
            toast.error("Error",{
                description: error.message,
              })
              setIsSendingMail(false)
        }
        else
        {
            console.log(data)
            toast.success("Success",{
                description: "E-mail sent successfully"
            })
            router.push('/login')
        }
    }

    return(
        <div className="">
            <Toaster richColors/>
            <Card>
                <CardHeader className="pb-14">
                    <CardTitle className="text-center">
                        Reset Password
                    </CardTitle>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10">
                    <FormField
                        control={form.control}
                        name = "email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel className="text-lg">Enter your e-mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="e-mail" {...field} disabled={isSendingMail} className="text-lg"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <div className=" flex justify-center">
                        <Button
                            type="submit"
                            disabled={isSendingMail}
                            >Send E-mail</Button>
                        </div>
                </form>
            </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default ResetForm;