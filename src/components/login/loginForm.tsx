import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: "Enter a valid username",
    })
    .max(50),
  password: z
    .string()
    .min(8, {
      message: "Incorrect password",
    })
    .max(20),
});

const LoginForm = () => {

  const router = useRouter();
  const [isRedirecting,setIsRedirecting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const redirect=(address:string)=>{
        setIsRedirecting(true)
        router.push(`/${address}`)
  }

  return (
    <>
    <div className="flex flex-col gap-6">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-[3vh]">
        <div className="flex flex-col gap-6 w-full">        
        <FormField
          control={form.control}
          name="username"  
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="flex justify-center flex-col w-fit gap-4">
            <Button 
                type="submit" 
                disabled={isRedirecting}
                className="text-[1.3em] px-6 py-6 ">Login</Button>

                {isRedirecting?<p className="text-gray-500 underline underline-offset-4 decoration-1">Forgot password?</p>
                    :<Link href={"/forgot-password"} className="text-center underline underline-offset-4 decoration-1" onClick={()=>setIsRedirecting(true)}>Forgot Password?</Link>
                    }
        </div>
      </form>
    </Form>
    <div className="px-10">

    <Separator className=""/>

    </div>
    <div className="flex justify-center">
        <Button
            disabled={isRedirecting}
            variant={"secondary"}
            className="text-[1.1em] px-8 py-6 "
            onClick={()=>redirect("signup")}
            >
                Signup
            </Button>
    </div>
    </div>
    </>
  );
};

export default LoginForm;
