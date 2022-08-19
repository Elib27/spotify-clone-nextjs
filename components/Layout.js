import styled from 'styled-components'
import Sidebar from "./SideBar"
import MusicBar from "./MusicBar"

const TopWrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
  position: relative;
`

export default function Layout({ children }) {
  return (
    <div>
      <TopWrapper>
        <Sidebar />
        {children}
      </TopWrapper>
      <MusicBar />
    </div>
  )
}
