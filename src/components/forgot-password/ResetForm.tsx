import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";



const formSchema = z.object({
    email: z.string().min(1,{message:"This field cannot be empty."}).email({message: "Enter a valid email."})
})

const ResetForm=()=>{
    const router = useRouter()
    const [isEmailSent,setIsEmailSent] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = (email: z.infer<typeof formSchema>)=>{
        console.log(email)
    }

    return(
        <div className="">
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
                                    <Input placeholder="e-mail" {...field} className="text-lg"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <div className=" flex justify-center">
                        <Button
                            type="submit"
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