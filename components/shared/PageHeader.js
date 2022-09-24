import styled from "styled-components"
import { useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from "next/image"
import Pannel from "./AccountPannel"
import SearchBar from '../searchPage/SearchBar'
import CategoryFilterBar from '../searchPage/CategoryFilterBar'
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
const HomeButton = styled.button`
  height: 48px;
  width: 48px;
  background-color: #242424;
  border-radius: 50%;
  color: #fff;
  opacity: 0.7;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({isHomePage}) => isHomePage && `
    opacity: 1;
  `}
  &:hover {
    background-color: #2a2a2a;
    opacity: 1;
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

const pagesWhereCollectionBarVisible = [
  '/collection/playlists',
  '/collection/podcasts',
  '/collection/artists',
  '/collection/albums',
]

const pagesWhereSubscribeButtonVisible = [
  '/',
  '/collection/tracks',
  '/download'
]

export default function PageHeader() {

  const navigation = useSelector(state => state.navigation)

  const [isFirstPageVisited, setIsFirstPageVisited] = useState(true)
  const [IsLastPageVisited, setIsLastPagePageVisited] = useState(true)
  const [firstPageVisitedIndex, setFirstPageVisitedIndex] = useState(0)

  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const panel = useRef(null)

  // useEffect(() => {
  //   if (window.history.state && typeof(window.history.replaceState) === "function") {
  //     window.history.replaceState({ page: window.history.length, href: location.href, oui: 'oui' }, "")
  //     console.log('initial change history state')
  //     setFirstPageVisitedIndex(window.history.length)
  //   }
  // },[])

  // useEffect(() => {
  //   const isFirstPageVisitedNewValue = (window.history.state && !window.history.state.page)
  //   setIsFirstPageVisited(isFirstPageVisitedNewValue)
  //   const isLastPageVisitedNewValue = (window.history.state.page && (window.history.state.page <= !window.history.length))
  //   setIsLastPagePageVisited(isLastPageVisitedNewValue)
  //   console.log('change page visited')
  // }, [navigation.currentPage])
  
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
            <HomeButton isHomePage={navigation.currentPage === '/'}>
              {navigation.currentPage === '/' ? <HouseFullLogo /> : <HouseLogo />}
            </HomeButton>
          </Link>
          <SearchBar />
          {pagesWhereCollectionBarVisible.includes(navigation.currentPage) && <CollectionNavBar/>}
        </CentralContainer>
        <RightContainer>
        {(pagesWhereSubscribeButtonVisible.includes(navigation.currentPage) || navigation.currentPage.includes('/playlist/'))
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
      {navigation.currentPage === '/search' && <CategoryFilterBar />}
    </HeaderContainer>
  )
}
