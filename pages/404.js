import styled from "styled-components"
import Image from 'next/image'
import Link from 'next/link'
import SEO from "../components/shared/SEO"

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 9999;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const Title = styled.h1`
  margin: 40px 0 16px 0;
  letter-spacing: -1.5px;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3rem;
  color: #fff;
`
const Description = styled.p`
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 1rem;
  color: #fff;
`
const HomeButton = styled.div`
  background-color: #fff;
  border: 1px solid #878787;
  border-radius: 48px;
  line-height: 24px;
  margin-bottom: 36px;
  padding: 12px 32px;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
`
const HelpButton = styled.div`
  background-color: transparent;
  width: 100%;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

export default function Page404() {
  return (
    <>
      <SEO title="Page introuvable" />
      <Wrapper>
        <Container>
          <Image src="/simple_spotify_logo.svg" alt="spotify logo" width={60} height={60} />
          <Title>Page introuvable</Title>
          <Description>Nous ne trouvons pas la page que vous recherchez.</Description>
          <Link href="/">
            <HomeButton>Accueil</HomeButton>
          </Link>
          <a href="https://support.spotify.com/fr/" target="_blank" rel="noreferrer">
            <HelpButton>Aide</HelpButton>
          </a>
        </Container>
      </Wrapper>
    </>
  )
}

Page404.getLayout = (page) => page
