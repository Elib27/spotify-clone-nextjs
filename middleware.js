import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const { pathname } = req.nextUrl || {pathname: ''}

  // console.log(token)

  if (pathname.includes('/api/auth')) {
    return NextResponse.next()
  }

  if (!token && pathname !== '/login') {
    const redirectURL = req.nextUrl
    redirectURL.pathname = '/login'
    return NextResponse.redirect(redirectURL)
  }

  if (token && pathname === '/login'){
    const redirectURL = req.nextUrl
    redirectURL.pathname = '/'
    return NextResponse.redirect(redirectURL)
  }

}

export const config = {
  matcher: [
    '/((?!_next|api/auth).*)(.+)'
  ],
}