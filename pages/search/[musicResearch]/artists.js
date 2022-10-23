import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'
import { useRouter } from "next/router"
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
  const [fetchedData, setFetchedData] = useState()

  const router = useRouter()
  const { musicResearch } = router.query

  useEffect(() => {
    async function getFirstArtists() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}/artists?offset=0`)
      const data = await response.json()
      setFetchedData(data)
    }
    
    getFirstArtists()

  }, [musicResearch])

  useEffect(() => {
    console.log(fetchedData)
  }, [fetchedData])

  
  if (!fetchedData) return (null)

  if (!fetchedData?.artistResults?.length) {
    return (<NoResults searchValue={musicResearch}/>)
  }

  return (
    <ArtistsContainer>
      {fetchedData?.artistResults.map((artist) => (
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

Artists.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>
