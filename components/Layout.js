import styled from 'styled-components'
import Navbar from "./NavBar"

const MainWrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
`

export default function Layout({ children }) {
  return (
    <MainWrapper>
      <Navbar />
      {children}
    </MainWrapper>
  )
}
