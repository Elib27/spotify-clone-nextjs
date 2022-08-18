import styled from 'styled-components'
import Image from 'next/image'
import NavBar from './NavBar'
import CreationBar from './CreationBar'
import PlaylistBar from './PlaylistBar'
import NavButton from './NavButton'

const Container = styled.div`
  height: 100vh;
  width: 241px;
  padding: 24px 8px 0 8px;
  background-color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TopContainer = styled.div`
`
const NavigationContainer = styled.div`
  margin-top: 18px;
`
const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #282828;
  margin: 0 8px;
`
const InstallButtonContainer = styled.div`
  display: flex;
`

export default function Sidebar() {
  return (
    <Container>
      <TopContainer>
        <Image src="/spotify_logo.svg" alt="logo" width={131} height={40} />
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
          imageSrc="/download.svg"
          imageAlt="download"
        />
      </InstallButtonContainer>
    </Container>
  )
}

// pb svg ?
