import { NextResponse } from "next/server";
import { jwtVerify } from "jose"
import type { NextRequest } from "next/server";
import { getJwtSecretKey } from "./lib/getJwtSecret";


export async function middleware(req: NextRequest) {
    const cookie = req.cookies.get('user-cookie')
    const url = req.nextUrl.clone()
    url.pathname = '/Login'
    if(!cookie) {
        return NextResponse.rewrite(url) //Sends user to Login page
    }
    const verified = await jwtVerify(
        cookie,
        new TextEncoder().encode(getJwtSecretKey())
    )
    //@ts-ignore
    if(verified.payload.data.isAdmin && req.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.next() //Give access to admin pages
    } else if(req.nextUrl.pathname.startsWith('/FavouriteBooks') || req.nextUrl.pathname.startsWith('/Profile')) {
        return NextResponse.next() //Give acess to profile page
    }
    url.pathname = '/404'
    return NextResponse.rewrite(url)
}

export const config = {
    matcher: ['/Profile', '/admin/:path*', '/FavouriteBooks']
}