import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.div`
  height: 100vh;
  width: 241px;
  padding-top: 24px;
  background-color: #000;
  position: relative;
`
const TopContainer = styled.div`

`
const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #282828;
  margin: 0 8px;
`
const InstallButton = styled.button`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
`
const InstallLabel = styled.p`
  font-size: 14px;
  margin-left: 16px;
`

export default function Navbar() {
  return (
    <Container>
      <Image src="/spotify_logo.svg" alt="logo" width={131} height={40} />
      <TopContainer>
        <Separator />
      </TopContainer>
      <InstallButton>
        <Link href="/download">
          <Image src="/download.svg" alt="download" width={24} height={24} />
        </Link>
        <InstallLabel>Installer l&apos;appli</InstallLabel>
      </InstallButton>
    </Container>
  )
}

// pb svg ?
