import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-width: 565px;
`
const ImageContainer = styled.div`
  flex-shrink: 0;
`
const DownloadLabel = styled.h3`
  max-width: 640px;
  font-size: 2rem;
  line-height: 1.6;
  font-weight: 700;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  text-align: center;
  padding-bottom: 24px;
  color: #fff;
`
const DownloadLink  = styled.a`
  text-decoration: none;
`
const DownloadButton = styled.button`
  height: 48px;
  border-radius: 48px;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 700;
  color: #000;
  background-color: #1ed760;
  border: none;
  padding: 8px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
    text-decoration: underline #fff;
  }
`

export default function Download() {

  const [downloadLink, setDownloadLink ] = useState('windows')

  useEffect(() => {
    const platform = window.navigator.platform
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
    let OS = null

    if (macosPlatforms.indexOf(platform) !== -1) {
      OS = 'mac'
    }
    else if (!OS && /Linux/.test(platform)) {
      OS = 'linux'
    }
    else {
      OS = 'windows'
    }
    setDownloadLink(OS)
  }, [])

  return (
    <Container>
      <MiddleContainer>
        <ImageContainer>
          <Image src="/mac_computer.png" width={640} height={396} alt="spotify app on a laptop"/>
        </ImageContainer>
        <DownloadLabel>Écoutez la musique que vous aimez en toute simplicité. Téléchargez l&apos;appli Spotify pour votre ordinateur.</DownloadLabel>
        <DownloadLink href={`https://www.spotify.com/fr/download/${downloadLink}`} target="_blank" rel='noreferrer'>
          <DownloadButton>Téléchargez notre appli gratuite</DownloadButton>
        </DownloadLink>
      </MiddleContainer>
    </Container>
  )
}
