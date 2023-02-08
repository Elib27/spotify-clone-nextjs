import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {

  console.log("url matched !")

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

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

}

// export const config = {
//   matcher: [
//     '/((?!_next|api|sentry|auth|static|api/auth).*)(.+)'
//   ],
// }

export const config = {
  matcher: [
    '/(login|collection|playlist|search|download)',
  ],
}

// matcher (/api/auth et /login et /collection et /playlist et /search et / et /download

// tout ce qui contient ... 