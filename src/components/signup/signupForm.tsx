import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import createClient from "@/utils/supabase/client";

const supabase = createClient()

const passwordSchema = z.string()
.min(8, { message: "Password must be at least 8 characters long." })
.regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
.regex(/[0-9]/, { message: "Password must contain at least one number." })
.regex(/[\W_]/, { message: "Password must contain at least one special character." })

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name should be at least 3 characters",
    })
    .max(50),
  email: z.string().min(1,{message:"This field cannot be empty."}).email({message: "Enter a valid email."}),
  password:passwordSchema,
  confirmPassword:z.string()
}).superRefine(({password, confirmPassword},ctx)=>{
    if(password!==confirmPassword)
    {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passwords do not match.",
            path: ['confirmPassword']
        });
        return false;
    }
    return true
  })

const SignupForm = () => {

  const router = useRouter();
  const [isRedirecting,setIsRedirecting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit =async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsRedirecting(true)
    const {data,error} = await supabase.auth.signUp({
      email:values.email,
      password: values.password,
      options:{
        data:{
          name : values.name
        }
      }
    })
    
    if(error)
      console.log(error)
    else
      router.push('/login')
  };

  type FieldName = "name" | "email" | "password" | "confirmPassword";

  const formFields: { name: FieldName; label: string; placeholder: string ,type?: string}[] = [
    {
      name: "name",
      label: "name",
      placeholder: "Enter your name"
    },
    {
      name: "email",
      label: "E-mail",
      placeholder: "Enter your e-mail",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password"
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm your password",
      type:"password"
    },
  ]

  return (
    <>
    <div className="flex flex-col gap-6">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-[3vh]">
        <div className="flex flex-col gap-2 w-full">        
       {formFields.map(({name,label,placeholder,type})=>{
        return(
          <FormField
          key={name}
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">{label}*</FormLabel>
              <FormControl>
                <Input placeholder={`${placeholder}`} {...field} type={type || 'text'}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        )
       })}
        </div>
        <div className="flex justify-center flex-col w-fit gap-4">
            <Button 
                type="submit" 
                disabled={isRedirecting}
                className="text-[1.3em] px-6 py-6 ">Signup</Button>
        </div>
      </form>
    </Form>
    </div>
    </>
  );
};

export default SignupForm;
