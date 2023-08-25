import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import MainLayout from "../../../components/shared/MainLayout"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import MusicCard from "../../../components/shared/MusicCard"
import NoResults from "../../../components/searchPage/NoResults"

const ArtistsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 24px;
`

export default function Artists() {
  const [artistsData, setArtistsData] = useState(null)

  const router = useRouter()
  const { musicResearch } = router.query

  useEffect(() => {
    async function getFirstArtists() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}/artists`)
      const data = await response.json()
      setArtistsData(data)
    }

    getFirstArtists()

  }, [musicResearch])

  if (!artistsData) return (null)

  if (!artistsData?.length) {
    return (<NoResults searchValue={musicResearch} />)
  }

  return (
    <ArtistsContainer>
      {artistsData.map((artist) => (
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