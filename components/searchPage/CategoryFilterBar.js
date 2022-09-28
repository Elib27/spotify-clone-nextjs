import styled from "styled-components"
import { useRouter } from "next/router"
import CategoryFilterButton from "./CategoryFilterButton"

const BarContainer = styled.div`
  height: 64px;
  width: 100%;
  background-color: #121212;
  padding: 0 32px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 10;
`
const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  overflow: hidden;
`

export default function CategoryFilterBar() {

  const router = useRouter()
  const { musicResearch } = router.query

  return (
    <BarContainer>
      <FiltersContainer>
        <CategoryFilterButton
          title="Tout"
          link={`/search/${musicResearch}`}
          isSelected={router.pathname.split('/').length <= 3}
        />
        <CategoryFilterButton
          title="Titres"
          link={`/search/${musicResearch}/tracks`}
          isSelected={router.pathname.split('/')[3] === 'tracks'}
        />
        <CategoryFilterButton
          title="Artistes"
          link={`/search/${musicResearch}/artists`}
          isSelected={router.pathname.split('/')[3] === 'artists'}
        />
        <CategoryFilterButton
          title="Playlists"
          link={`/search/${musicResearch}/playlists`}
          isSelected={router.pathname.split('/')[3] === 'playlists'}
        />
        <CategoryFilterButton
          title="Albums"
          link={`/search/${musicResearch}/albums`}
          isSelected={router.pathname.split('/')[3] === 'albums'}
        />
        {/* <CategoryFilterButton
          title="Genres et ambiances"
        />
        <CategoryFilterButton
          title="Podcasts et émissions"
        />
        <CategoryFilterButton
          title="Profils"
        /> */}
      </FiltersContainer>
    </BarContainer>
  )
}
