import styled from 'styled-components'
import { signIn } from 'next-auth/react'
import SEO from '@/components/shared/SEO'
import MusicBarsAnimation from '@/components/auth/MusicBarsAnimation'
import SpotifyLogo from '@/public/simple_spotify_logo.svg'

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
  text-align: center;
`
const TextGradient = styled.a`
  font-weight: 700;
  background: linear-gradient(320deg,#2174cb,#3ca2eb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: relative;
    display: block;
    left: 0;
    bottom: 2px;
    background: linear-gradient(320deg,#2174cb,#275678);
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`
const Subtitle = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-top: 20px;
  text-align: center;
`
const AuthButton = styled.button`
  background-color: #1ed760;
  color: #000;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 50px;
  border: 0;
  padding: 10px 30px;
  margin-top: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
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

export default function Login() {
  return (
    <>
      <SEO title='Spotify Clone - Login' />
      <MainContainer>
        <SpotifyLogo />
        <Title>Spotify Clone by <TextGradient href='https://github.com/Elib27/spotify-clone-nextjs' target='_blank'>BAS Eliot</TextGradient></Title>
        <Subtitle>This website is a Spotify clone coded for training with Next JS.</Subtitle>
        <AuthButton onClick={() => signIn('spotify')} aria-label='Se connecter'>Connexion</AuthButton>
        <MusicBarsAnimation />
      </MainContainer>
    </>
  )
}

Login.getLayout = page => page