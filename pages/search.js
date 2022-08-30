import styled from 'styled-components'
import SearchCard from '../components/SearchCard'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  padding: 32px 16px 0 16px;
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

const CategoryCards = [
  {title: "Podcasts", backgroundColor: "#27856a", cover: "/categoryCover.jpg"},
  {title: "Conçu spécialement pour vous", backgroundColor: "rgb(30, 50, 100)", cover: "/categoryCover.jpg"},
  {title: "Classements", backgroundColor: "rgb(141, 103, 171)", cover: "/categoryCover.jpg"},
  {title: "Podcasts", backgroundColor: "#27856a", cover: "/categoryCover.jpg"},
  {title: "Podcasts", backgroundColor: "#27856a", cover: "/categoryCover.jpg"},
  {title: "Podcasts", backgroundColor: "#27856a", cover: "/categoryCover.jpg"},
  {title: "Podcasts", backgroundColor: "#27856a", cover: "/categoryCover.jpg"}
]

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
          {CategoryCards.map((category, index) => (
            <SearchCard
              title={category.title}
              cardBackgroundColor={category.backgroundColor}
              imageSrc={category.cover}
              key={category.title}
            />
          ))}
        </CategoriesContainer>
      </SearchSection>
    </Container>
  )
}
