import styled from "styled-components"
import { useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Pannel from "./AccountPannel"
import SearchBar from '../searchPage/SearchBar'
import SpotifyLogo from '../../public/header_logos/spotify_logo.svg'
import HouseLogo from '../../public/header_logos/house.svg'
import HouseFullLogo from '../../public/header_logos/house_full.svg'
import AvatarLogo from '../../public/header_logos/default_avatar.svg'

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
const LogoButton = styled.button`
  height: 32px;
  width: 32px;
  color: #fff;
  border: none;
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
  ${({isHomePage}) => isHomePage && `
    opacity: 1;
  `}
`
const HomeButton = styled.button`
  height: 48px;
  width: 48px;
  background-color: #242424;
  border-radius: 50%;
  color: #fff;
  border: none;
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
const SubscribeButton = styled.button`
  height: 32px;
  font-size: 0.875rem;
  font-weight: 700;
  outline: none;
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
  cursor: pointer;
  &:hover {
    border-color: #2a2a2a;
  }
`
const AvatarLogoContainer = styled.div`
  height: 20px;
`

const TestPannel = styled.div`
  height: 200px;
  width: 100px;
  background-color: red;
  position: absolute;
  top: 64px;
  right: 400px;
  z-index: 10000;
`

const pagesWhereSubscribeButtonVisible = [
  '/',
  '/collection/tracks',
  '/download'
]

export default function PageHeader() {

  const router = useRouter()
  const navigation = useSelector(state => state.navigation)

  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const panel = useRef(null)
  
  function handleClickPrevPage() {
    console.log('prevButton')
  }
  
  function handleClickNextPage() {
    console.log('nextButton')
  }
  
  function handleClickOutside(e) {
    // console.log('isPanelOpen: ', isPanelOpen)
    if (panel.current && !panel.current.contains(e.target)){
      if (isPanelOpen) {
        setIsPanelOpen(false)
        console.log('clicked outside', e.target)
      }
    }
  }

  function openPanel() {
    setTimeout(() => {
      setIsPanelOpen(true)
    }, 10)
  }
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [])
  
  useEffect(() => {
    console.log('isPanelOpen: ', isPanelOpen)
  }, [isPanelOpen])

  return (
    <HeaderContainer>
      <MainNavBar>
        <LeftContainer>
          <Link href="/">
            <LogoButton>
              <SpotifyLogo height={32} width={32}/>
            </LogoButton>
          </Link>
        </LeftContainer>
        <CentralContainer>
          <Link href="/">
            <HomeButton>
              <HomeLogoContainer isHomePage={navigation.currentPage === '/'}>
                {navigation.currentPage === '/' ? <HouseFullLogo /> : <HouseLogo />}
              </HomeLogoContainer>
            </HomeButton>
          </Link>
          <SearchBar />
        </CentralContainer>
        <RightContainer>
        {(pagesWhereSubscribeButtonVisible.includes(router.pathname) || router.pathname.startsWith('/playlist/'))
        && (
          <a href="https://www.spotify.com/fr/premium/" target="blank_" rel='noreferrer'>
            <SubscribeButton>S&apos;abonner</SubscribeButton>
          </a>
        )}
          <AccountButton onClick={openPanel}>
            <AvatarLogoContainer>
              <AvatarLogo width={16} height={16} alt="account button" />
            </AvatarLogoContainer>
          </AccountButton>
        </RightContainer>
        {/* <Pannel /> */}
        {/* { isPanelOpen && (
          <TestPannel ref={panel}>
            <p>TestPannel</p>
          </TestPannel>
        )} */}
      </MainNavBar>
    </HeaderContainer>
  )
}
