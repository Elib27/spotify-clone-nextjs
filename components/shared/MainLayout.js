import styled from 'styled-components'
import Sidebar from "@/components/sideBar/SideBar"
import MusicBar from "@/components/musicBar/MusicBar"
import PageHeader from './PageHeader'
import SEO from './SEO'

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
  background-color: #121212;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  border-radius: 8px;
  /* Firefox */
  scrollbar-color: rgba(255,255,255,0.3);
  scrollbar-width: thin;
  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    min-height: 30px;
    border: 2px solid transparent;
    background-color: rgba(255,255,255,0.3);
    background-clip: content-box;
    transition: background-color 0.2s ease-in-out;
    z-index: 9999;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255,255,255,0.5);
  }
`

export default function MainLayout({ children }) {

  return (
    <>
      <SEO title="Spotify Clone" description="Spotify clone coded by BAS Eliot with Next JS." />
      <MainWrapper>
        <PageHeader />
        <Sidebar />
        <PageContainer>
          {children}
        </PageContainer>
        <MusicBar />
      </MainWrapper>
    </>
  )
}
