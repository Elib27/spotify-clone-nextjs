import styled from 'styled-components'

const Container = styled.section`
  margin-bottom: 24px;
`
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 22px;
`
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const SeeAllButton = styled.button`
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  line-height: 1.6;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  color: #b3b3b3;
  text-transform: uppercase;
  font-weight: 700;
  background-color: transparent;
  border: none;
  align-self: flex-end;
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
  }
`
const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cardsNumberPerRow }) => $cardsNumberPerRow || '4'}, minmax(0, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 24px;
`

export default function HomeSection({ title, children, cardsNumberPerRow }) {
  return (
    <Container>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <SeeAllButton>TOUT AFFICHER</SeeAllButton>
      </SectionHeader>
      <SectionContent $cardsNumberPerRow={cardsNumberPerRow} >
        {children}
      </SectionContent>
    </Container>
  )
}
