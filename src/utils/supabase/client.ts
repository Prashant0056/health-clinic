import { createBrowserClient } from '@supabase/ssr'


const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string 
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_CLIENT_API_KEY as string

const createClient=()=>{
    return createBrowserClient(SUPABASE_URL,SUPABASE_KEY)
}

export default createClient;