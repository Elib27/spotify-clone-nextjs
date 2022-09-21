import styled from "styled-components"
import { useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrementHistoryIndex,
  pushLinkToHistory,
  removeHistoryLinksUntilIndex
} from "../../store/store"
import { useRouter } from 'next/router'
import Image from "next/image"
import Pannel from "./AccountPannel"
import SearchBar from '../searchPage/SearchBar'
import CollectionNavBar from '../collection/collectionNavBar'
import CategoryFilterBar from '../searchPage/CategoryFilterBar'

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
`
const MainNavBar = styled.div`
  height: 64px;
  width: 100%;
  padding: 0 16px 0 32px;
  background-color: #0ff0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LeftContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: nowrap;
  align-items: center;
`
const NavigationButton = styled.button`
  height: 32px;
  width: 32px;
  background-color: rgba(0,0,0,0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  ${({ disabled }) => disabled && `
    opacity: 0.6;
    cursor: not-allowed;
  `}
`
const RightContainer = styled.div`
  display: flex;
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
  background-color: #000;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 28px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  &:hover {
    background-color: #282828;
  }
`
const AccountImage = styled.div`
  height: 28px;
  width: 28px;
  background-color: #535353;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const AccountImageContainer = styled.div`
  height: 20px;
`
const Username = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  max-width: 110px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const TriangleLogoContainer = styled.div`
  height: 16px;
  margin-right: 6px;
`

const user = 'eliot';

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
  const dispatch = useDispatch()
  const [isFirstPageVisited, setIsFirstPageVisited] = useState(true)
  const [IsLastPageVisited, setIsLastPagePageVisited] = useState(true)

  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const panel = useRef(null)

  useEffect(() => {
    if (window.history.state && typeof(window.history.replaceState) === "function") {
      window.history.replaceState({ page: window.history.length, href: location.href, oui: 'oui' }, "foo")
      console.log('initial change history state')
    }
  },[])

  useEffect(() => {
    const isFirstPageVisitedNewValue = (window.history.state && !window.history.state.page)
    setIsFirstPageVisited(isFirstPageVisitedNewValue)
    const isLastPageVisitedNewValue = (window.history.state.page && (window.history.state.page <= !window.history.length))
    setIsLastPagePageVisited(isLastPageVisitedNewValue)
    console.log('change page visited')
  }, [navigation.currentPage])
  
  function handleClickPrevPage() {
    // if (navigation.history.index > 0) {
      window.history.back()
      // dispatch(decrementHistoryIndex())
    // }
  }
  
  function handleClickNextPage() {
    // if (navigation.history.index < 10) {
      window.history.forward()
    // }
  }
  
  useEffect(() => {
    console.log(navigation.history.index)
  }, [navigation.history.index])
  
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
          <NavigationButton
            onClick={handleClickPrevPage}
            disabled={isFirstPageVisited}
          >
            <Image src="/header_logos/left_arrow.svg" alt="return button" width={22} height={22} />
          </NavigationButton>
          <NavigationButton
            onClick={handleClickNextPage}
            disabled={IsLastPageVisited}
          >
            <Image src="/header_logos/right_arrow.svg" alt="forward button" width={22} height={22} />
          </NavigationButton>
          {navigation.currentPage === '/search' && <SearchBar />}
          {pagesWhereCollectionBarVisible.includes(navigation.currentPage) && <CollectionNavBar/>}
        </LeftContainer>
        <RightContainer>
        {(pagesWhereSubscribeButtonVisible.includes(navigation.currentPage) || navigation.currentPage.includes('/playlist/'))
        && (
          <a href="https://www.spotify.com/fr/premium/" target="blank_" rel='noreferrer'>
            <SubscribeButton>S&apos;abonner</SubscribeButton>
          </a>
        )}
          <AccountButton onClick={openPanel}>
            <AccountImage>
              <AccountImageContainer>
                <Image src="/header_logos/default_avatar.svg" alt="account button" width={16} height={16} />
              </AccountImageContainer>
            </AccountImage>
            <Username>{user}</Username>
            <TriangleLogoContainer>
              <Image src="/header_logos/triangle.svg" alt="toogle menu logo" width={16} height={16} />
            </TriangleLogoContainer>
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
