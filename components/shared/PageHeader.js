import styled from "styled-components"
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import Image from 'next/image'
import Pannel from "./AccountPannel"
import SearchBar from '@/components/searchPage/SearchBar'
import SpotifyLogo from '@/public/header_logos/spotify_logo.svg'
import HouseLogo from '@/public/header_logos/house.svg'
import HouseFullLogo from '@/public/header_logos/house_full.svg'
import AvatarLogo from '@/public/header_logos/default_avatar.svg'

const HeaderContainer = styled.header`
  background-color: #000;
  grid-column: 1 / -1;
  grid-row: 1;
`
const MainNavBar = styled.div`
  height: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  gap: 16px;
  padding-left: 8px;
  border-radius: 8px;
  background-color: #0ff0;
`
const LeftContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: nowrap;
  align-items: center;
`
const LogoButton = styled.div`
  height: 32px;
  width: 32px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
`
const CentralContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
`
const HomeLogoContainer = styled.div`
  height: 24px;
  width: 24px;
  opacity: 0.7;
  ${({ isHomePage }) => isHomePage && `
    opacity: 1;
  `}
`
const HomeButton = styled.div`
  height: 48px;
  width: 48px;
  background-color: #242424;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #2a2a2a;
    ${HomeLogoContainer} {
      opacity: 1;
    }
  }
`
const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
`
const SubscribeButton = styled.div`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid #727272;
  color: #fff;
  border-radius: 50px;
  user-select: none;
  padding: 3px 15px;
  &:hover {
    transform: scale(1.04);
    border-color: #fff;
  }
`
const AccountButton = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: #121212;
  border: 8px solid #242424;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover {
    border-color: #2a2a2a;
  }
  svg {
    margin-bottom: 2px;
  }
  img {
    border-radius: 50%;
    object-fit: cover;
  }
`

const pagesWhereSubscribeButtonVisible = [
  '/',
  '/collection/tracks',
  '/download'
]

export default function PageHeader() {

  const router = useRouter()

  const { data: session } = useSession()

  const [isPanelOpen, setIsPanelOpen] = useState(false)

  function openPanel() {
    setTimeout(() => {
      setIsPanelOpen(true)
    }, 0)
  }

  const isSubscribeButtonVisible = pagesWhereSubscribeButtonVisible.includes(router.pathname) || router.pathname.startsWith('/playlist/')

  return (
    <HeaderContainer>
      <MainNavBar>
        <LeftContainer>
          <Link href="/" aria-label="accueil">
            <LogoButton>
              <SpotifyLogo height={32} width={32} />
            </LogoButton>
          </Link>
        </LeftContainer>
        <CentralContainer>
          <Link href="/" aria-label="accueil">
            <HomeButton>
              <HomeLogoContainer isHomePage={router.asPath === '/'}>
                {router.asPath === '/' ? <HouseFullLogo /> : <HouseLogo />}
              </HomeLogoContainer>
            </HomeButton>
          </Link>
          <SearchBar />
        </CentralContainer>
        <RightContainer>
          {isSubscribeButtonVisible && (
            <a href="https://www.spotify.com/fr/premium/" target="blank_" rel="noreferrer" aria-label="abonnements" >
              <SubscribeButton>S&apos;abonner</SubscribeButton>
            </a>
          )}
          <AccountButton onClick={openPanel} aria-label="Ouvrir les options du compte">
            {session?.user?.image ? (
              <Image src={session?.user?.image} draggable="false" fill alt="photo de profil" />
            ) : (
              <AvatarLogo width={16} height={16} alt="account button" />
            )
            }
          </AccountButton>
        </RightContainer>
        {isPanelOpen && <Pannel setIsPanelOpen={setIsPanelOpen} />}
      </MainNavBar>
    </HeaderContainer>
  )
}
