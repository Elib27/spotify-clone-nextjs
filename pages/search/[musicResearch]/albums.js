import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'
import { useRouter } from "next/router"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import MusicCard from "../../../components/shared/MusicCard"
import NoResults from "../../../components/searchPage/NoResults"

const AlbumsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 24px;
`

export default function Playlists() {
  const [fetchedData, setFetchedData] = useState()

  const router = useRouter()
  const { musicResearch } = router.query

  useEffect(() => {
    async function getFirstTracks() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}/albums?offset=0`)
      const data = await response.json()
      setFetchedData(data)
    }
    
    getFirstTracks()

  }, [musicResearch])

  useEffect(() => {
    console.log(fetchedData)
  }, [fetchedData])

  if (!fetchedData) return (null)

  if (!fetchedData?.albumResults?.length) {
    return (<NoResults searchValue={musicResearch}/>)
  }

  return (
    <AlbumsContainer>
      {fetchedData?.albumResults.map((album) => (
        <MusicCard
          title={album.name}
          cover_url={album.cover_url}
          description={`${album.releaseDate.split('-')[0]} • ${album.artists.join(', ')}`}
          key={album.id}
        />
      ))}
    </AlbumsContainer>
  )
}


Playlists.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>
