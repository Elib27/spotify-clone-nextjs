import styled from 'styled-components'
import SearchCard from '../components/SearchCard'
import SearchCategories from '../data/search_categories.json'

const Container = styled.div`
  width: 100%;
  padding-top: 16px;
`
const SearchSection = styled.section`
  padding: 16px 0;
`
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  padding-bottom: 16px;
`
const MusicStyleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  gap: 18px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const CategoriesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(158px, 1fr));
  grid-gap: 24px;
  position: relative;
`

export default function search() {
  return (
    <Container>
      <SearchSection>
        <SectionTitle>Vos genres préférés</SectionTitle>
        <MusicStyleContainer>
          <SearchCard
            title="Variété française"
            isBigCard
            cardBackgroundColor="#b49bc8"
            imageSrc="/search_cover.jpg"
          />
          <SearchCard
            title="Hip-Hop"
            isBigCard
            cardBackgroundColor="#ba5d07"
            imageSrc="/search_cover2.jpg"
          />
        </MusicStyleContainer>
      </SearchSection>
      <SearchSection>
        <SectionTitle>Parcourir tout</SectionTitle>
        <CategoriesContainer>
          {SearchCategories.map((category, index) => (
            <SearchCard
              title={category.title}
              cardBackgroundColor={category.background_color}
              imageSrc={category.cover_url}
              key={index}
            />
          ))}
        </CategoriesContainer>
      </SearchSection>
    </Container>
  )
}
