import styled from 'styled-components'
import Sidebar from "./SideBar"
import MusicBar from "./MusicBar"
import PageHeader from '../components/pageHeader'

const TopWrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
  position: relative;
  height: calc(100vh - 91px);
  width: 100%;
`
const PageContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #121212;
  padding: 0 16px 0 32px;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-gutter: none;
  &::-webkit-scrollbar {
    width: 12px;
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
  padding-top: 24px;
  position: relative;
`

export default function Layout({ children }) {
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
