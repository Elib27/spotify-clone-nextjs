import styled from 'styled-components'
import SearchCard from '@/components/searchPage/SearchCard'
import SearchCategories from '@/data/search_categories.json'

const Container = styled.div`
  width: 100%;
  padding: 40px 24px 24px 32px;
  max-width: 1955px;
`
const SearchSection = styled.section`
  padding: 16px 0;
`
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  letter-spacing: -0.06rem;
  font-weight: 700;
  color: #fff;
  padding-bottom: 16px;
`
const CategoriesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  grid-gap: 24px;
  position: relative;
`

export default function SearchPageCategories() {
  return (
    <Container>
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