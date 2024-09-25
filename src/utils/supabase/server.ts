import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { CloudCog } from "lucide-react"
import { cookies } from "next/headers"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string 
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_CLIENT_API_KEY as string

const createClient=()=>{

    const cookieStore =cookies()

    return createServerClient(SUPABASE_URL,SUPABASE_KEY,{
        cookies:{
            getAll(){
                return cookieStore.getAll()
            },
            setAll(cookiesToSet){
                try{
                    cookiesToSet.forEach(({name,value,options})=>cookieStore.set(name,value,options))
                } catch(err){
                        console.log(err)
                }
            }
        }
    })
}

export default createClient;