import styled from 'styled-components'
import Sidebar from "../sideBar/SideBar"
import MusicBar from "../musicBar/MusicBar"
import PageHeader from './PageHeader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import {
  changeCurrentPage,
} from '../../store/store'

const TopWrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
  position: relative;
  height: calc(100vh - 91px);
  width: 100%;
`
const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-gutter: none;
  position: relative;
  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    min-height: 30px;
    background-color: rgba(255,255,255,0.3);
    /* border: 4px solid transparent ; */
    transition: background-color 0.2s ease-in-out;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255,255,255,0.5);
  }
`
const PageContent = styled.div`
  height: calc(100% - 64px);
  width: 100%;
  max-width: 1955px;
  position: relative;
`

export default function Layout({ children }) {

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    
    function handleStop(url) {
      dispatch(changeCurrentPage(url))
      // if (window.history.state && typeof(window.history.replaceState) === "function") {
      //   window.history.replaceState({ page: window.history.length, href: location.href, oui: 'oui' }, "foo")
      // }
    }

    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }

  }, [router])

  return (
    <div>
      <TopWrapper>
        <Sidebar />
        <PageContainer>
          <PageHeader />
          <PageContent>
            {children}
          </PageContent>
        </PageContainer>
      </TopWrapper>
      <MusicBar />
    </div>
  )
}
