import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = ['/home']

const isAuthenticated: Boolean = false; 

export default function middleware(req: NextRequest) {
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