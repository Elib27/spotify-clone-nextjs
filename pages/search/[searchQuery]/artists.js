import styled from "styled-components"
import { useRouter } from 'next/router'
import useSearchResults from "@/hooks/useSearchResults"
import MainLayout from '@/components/shared/MainLayout'
import SearchResultLayout from '@/components/searchPage/SearchResultLayout'
import MusicCard from '@/components/shared/MusicCard'
import NoResults from '@/components/searchPage/NoResults'

const ArtistsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 24px;
`

export default function Artists() {

  const router = useRouter()
  const { searchQuery } = router.query

  const { data: artists } = useSearchResults('artists', searchQuery)


  if (!artists) return (null)

  if (!artists?.length) {
    return (<NoResults searchValue={searchQuery} />)
  }

  return (
    <ArtistsContainer>
      {artists.map((artist) => (
        <MusicCard
          title={artist.name}
          cover_url={artist.cover_url}
          description="Artiste"
          key={artist.id}
          isRoundImage
        />
      ))}
    </ArtistsContainer>
  )
}

Artists.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <SearchResultLayout>{page}</SearchResultLayout>
    </MainLayout>
  )
}