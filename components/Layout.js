import styled from 'styled-components'
import Sidebar from "./SideBar"

const MainWrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
`

export default function Layout({ children }) {
  return (
    <MainWrapper>
      <Sidebar />
      {children}
    </MainWrapper>
  )
}
