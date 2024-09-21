import { NextRequest, NextResponse } from "next/server"
import supabase from "./helpers/supabase";

const protectedRoutes = ['/home']


export default async function middleware(req: NextRequest) {
    const{data: session} = await supabase.auth.getSession()

    const isAuthenticated = !!session;

    if(!isAuthenticated && protectedRoutes.includes(req?.nextUrl?.pathname))
    {
        const absoluteUrl = new URL("/login", req.nextUrl.origin)
        return NextResponse.redirect(absoluteUrl.toString())
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/home'],
};