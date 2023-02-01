import styled from "styled-components"
import SpotifyLogo from "../../public/simple_spotify_logo.svg"
import MusicBarsAnimation from "./MusicBarsAnimation"
import { useEffect } from "react"

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212;
`
const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-top: 30px;
`
const TextGradient = styled.span`
  font-weight: 700;
  background: linear-gradient(320deg,#2174cb,#3ca2eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Subtitle = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-top: 20px;
`
const AuthButton = styled.button`
  background-color: #1ed760;
  color: #000;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 50px;
  padding: 10px 30px;
  margin-top: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #fff;
    mix-blend-mode: difference;
    transition: width 0.3s ease-out;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
`

export default function Authentication({ setIsAuthenticated }) {

  useEffect(() => {
    async function getAccessToken(code) {
      const response = await fetch(`/api/getAccessToken?code=${code}`)
      const data = await response.json()
      return data?.access_token
    }
    async function authenticate() {
      if (window.location.search.includes("code")) {
        const code = new URLSearchParams(window.location.search).get("code")
        const access_token = await getAccessToken(code)
        setIsAuthenticated(true)
      }
      else if (window.location.search.includes("error")) {
        const error = new URLSearchParams(window.location.search).get("error")
        console.warn("error : " + error)
      }
    }
    authenticate()
  }, [setIsAuthenticated])

  async function setAuth() {
    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID
    const scope = process.env.NEXT_PUBLIC_SCOPE

    const env = process.env.NODE_ENV
    const redirect_uri = env === "development" ? "http://localhost:3000" : null
    const response_type = "code"

    const authUrl = "https://accounts.spotify.com/authorize?" + new URLSearchParams({
      response_type,
      client_id,
      redirect_uri,
      scope,
    }).toString()

    window.location.replace(authUrl)
  }

  return (
    <MainContainer>
      <SpotifyLogo />
      <Title>Spotify Clone by <TextGradient>BAS Eliot</TextGradient></Title>
      <Subtitle>This website is a Spotify clone coded for training with Next JS.</Subtitle>
      <AuthButton onClick={setAuth}>Connexion</AuthButton>
      <MusicBarsAnimation />
    </MainContainer>
  )
}
