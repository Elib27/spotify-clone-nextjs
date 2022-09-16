import styled from "styled-components"


const Container = styled.div`
  width: 100%;
  padding: 0 16px 32px 32px;
`
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  margin: 16px 0;
  line-height: 1.6;
`
const PlaylistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-template-rows: auto;
  grid-gap: 24px;
`

export default function CollectionPageContainer({title, children}) {
  return (
    <Container>
      <Title>{title}</Title>
      <PlaylistsContainer>
        {children}
      </PlaylistsContainer>
    </Container>
  )
}
