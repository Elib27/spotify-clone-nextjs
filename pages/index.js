// import Head from 'next/head'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  position: relative;
`
const Title = styled.h2`  
  color: #fff;
  font-size: 2em;
  line-height: 1em;
  font-weight: 700;
`
const HomePageContainer = styled.section`
  padding: 24px 16px 0 16px;
  width: 100%;
`
const MoreContent = styled.div`
  height: 150vh;
`

export default function Home() {
  return (
    <HomeWrapper>
      <PageHeader />
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