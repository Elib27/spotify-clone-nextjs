import styled from 'styled-components'
import Sidebar from "./SideBar"
import MusicBar from "./MusicBar"

const TopWrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
  position: relative;
  height: calc(100vh - 90px);
  width: 100%;
`
const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`

export default function Layout({ children }) {
  return (
    <div>
      <TopWrapper>
        <Sidebar />
        <PageContainer>
          {children}
        </PageContainer>
      </TopWrapper>
      <MusicBar />
    </div>
  )
}
