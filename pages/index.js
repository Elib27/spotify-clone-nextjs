// import Head from 'next/head'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`
const Title = styled.h2`  
  color: #fff;
  font-size: 2em;
  line-height: 1em;
  font-weight: 700;
`
const HomePageContainer = styled.section`
  width: 100%;
`
const MoreContent = styled.div`
  height: 150vh;
`

export default function Home() {
  return (
    <HomeWrapper>
      <HomePageContainer>
        <Title>Bonjour</Title>
        <MoreContent>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
          <p>Ceci est une phrase pour remplir la page</p>
        </MoreContent>
      </HomePageContainer>
    </HomeWrapper>
  )
}