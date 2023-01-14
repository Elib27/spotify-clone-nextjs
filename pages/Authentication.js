import styled from "styled-components"

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212;
`

export default function Authentication() {
  return (
    <MainContainer>
      <h1>Spotify Clone by BAS Eliot</h1>
      <p>Authentication Page</p>
    </MainContainer>
  )
}

