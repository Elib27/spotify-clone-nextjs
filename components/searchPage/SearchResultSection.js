import styled from "styled-components"

const Container = styled.section`
  grid-column: 1/-1;
  margin-bottom: 10px;
`
const SectionHeader = styled.div`
  margin-bottom: 16px;
`
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  line-height: 1.6;
`
const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(${({cardsNumberPerRow}) => cardsNumberPerRow || '4'}, minmax(0, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 24px;
  overflow: hidden;
`

export default function SearchResultSection({title, children, cardsNumberPerRow, data}) {

  if (!data?.length) return (null)

  return (
    <Container>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
      </SectionHeader>
      <SectionContent cardsNumberPerRow={cardsNumberPerRow}>
        {children}
      </SectionContent>
    </Container>
  )
}
