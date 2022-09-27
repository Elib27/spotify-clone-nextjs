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

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  width: 100%;
  background-color: #000;
  gap: 8px;
  padding: 8px;
`
const PageContainer = styled.div`
  grid-row: 2;
  grid-column: 2;
  height: calc((100vh - 64px) - 88px);
  max-width: 1955px;
  background-color: #121212;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-gutter: none;
  position: relative;
  border-radius: 8px;
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

export default function MainLayout({ children }) {

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    
    function handleStop(url) {
      dispatch(changeCurrentPage(url))
    }
    
    handleStop(router.pathname)

    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }

  }, [router])

  return (
    <MainWrapper>
      <PageHeader />
      <Sidebar />
      <PageContainer>
        {children}
      </PageContainer>
      <MusicBar />
    </MainWrapper>
  )
}
