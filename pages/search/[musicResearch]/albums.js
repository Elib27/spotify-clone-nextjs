import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import MainLayout from "../../../components/shared/MainLayout"
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
  const [albumsData, setAlbumsData] = useState(null)

  const router = useRouter()
  const { musicResearch } = router.query

  useEffect(() => {
    async function getFirstTracks() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}/albums`)
      const data = await response.json()
      setAlbumsData(data)
    }
    
    getFirstTracks()

  }, [musicResearch])

  if (!albumsData) return (null)

  if (!albumsData?.length) {
    return (<NoResults searchValue={musicResearch}/>)
  }

  return (
    <AlbumsContainer>
      {albumsData.map((album) => (
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


Playlists.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <SearchResultLayout>{page}</SearchResultLayout>
    </MainLayout>
  )
}