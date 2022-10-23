import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'
import { useRouter } from "next/router"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import MusicCard from "../../../components/shared/MusicCard"
import NoResults from "../../../components/searchPage/NoResults"

const PlaylistsContainer = styled.div`
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
      const response = await fetch(`/api/getSearchResults/${musicResearch}/playlists?offset=0`)
      const data = await response.json()
      setFetchedData(data)
    }
    
    getFirstTracks()

  }, [musicResearch])

  useEffect(() => {
    console.log(fetchedData)
  }, [fetchedData])

if (!fetchedData) return (null)

if (!fetchedData?.playlistResults?.length) {
  return (<NoResults searchValue={musicResearch}/>)
}

return (
  <PlaylistsContainer>
    {fetchedData?.playlistResults.map((playlist) => (
      <MusicCard
        title={playlist.name}
        cover_url={playlist.cover_url}
        description={`Par ${playlist.owner}`}
        key={playlist.id}
      />
    ))}
  </PlaylistsContainer>
)
}

Playlists.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>
