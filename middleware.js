import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  console.log(token)

  const { pathname } = req.nextUrl || {pathname: ''}

  if (pathname.includes('/api/auth')) {
    return NextResponse.next()
  }

  if (!token && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.nextUrl.origin))
  }

  if (token && pathname === '/login'){
    return NextResponse.redirect(new URL('/', req.nextUrl.origin))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/(login|collection|playlist|search|download)(.*)',
    '/'
  ],
}