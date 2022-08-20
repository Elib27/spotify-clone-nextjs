import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/image'
import NavBar from './NavBar'
import CreationBar from './CreationBar'
import PlaylistBar from './PlaylistBar'
import NavButton from './NavButton'

const Container = styled.div`
  height: 100%;
  width: 242px;
  padding: 24px 8px 0 8px;
  background-color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TopContainer = styled.div`
`
const SpotifyLogo = styled.div`
  padding: 0 16px;
  padding-bottom: 4px;
`
const NavigationContainer = styled.div`
  margin-top: 18px;
`
const Separator = styled.div`
  height: 1px;
  width: calc(100% - 32px);
  background-color: #282828;
  margin: 8px 16px 0 16px;
`
const InstallButtonContainer = styled.div`
  display: flex;
`

export default function Sidebar() {
  return (
    <Container>
      <TopContainer>
        <SpotifyLogo>
          <Link href="/">
            <Image src="/sideBar_logos/spotify_logo.svg" alt="logo" width={131} height={40} />
          </Link>
        </SpotifyLogo>
        <NavigationContainer>
          <NavBar />
          <CreationBar />
          <Separator />
          <PlaylistBar />
        </NavigationContainer>
      </TopContainer>
      <InstallButtonContainer>
        <NavButton
          label="Installer l&apos;appli"
          link="/download"
          imageSrc="/sideBar_logos/download.svg"
          imageAlt="download"
        />
      </InstallButtonContainer>
    </Container>
  )
}
