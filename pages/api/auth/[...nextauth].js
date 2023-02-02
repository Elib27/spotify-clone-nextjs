import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";

const scope = process.env.NEXT_PUBLIC_SCOPE

const redirect_uri = "http://localhost:3000"
const response_type = "code"

const AUTH_URL = "https://accounts.spotify.com/authorize?" + new URLSearchParams({
  // response_type,
  // client_id,
  // redirect_uri,
  scope,
}).toString()

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: AUTH_URL
    })
  ],
  pages: {
    signIn: "/login",
  }
}
export default NextAuth(authOptions)