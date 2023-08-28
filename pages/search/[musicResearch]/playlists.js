import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MainLayout from '@/components/shared/MainLayout'
import SearchResultLayout from '@/components/searchPage/SearchResultLayout'
import MusicCard from '@/components/shared/MusicCard'
import NoResults from '@/components/searchPage/NoResults'

const PlaylistsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 24px;
`

export default function Playlists() {
  const [playlistsData, setPlaylistsData] = useState(null)

  const router = useRouter()
  const { musicResearch } = router.query

  useEffect(() => {
    async function getFirstPlaylists() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}/playlists`)
      const data = await response.json()
      setPlaylistsData(data)
    }

    getFirstPlaylists()

  }, [musicResearch])


  if (!playlistsData) return (null)

  if (!playlistsData?.length) {
    return (<NoResults searchValue={musicResearch} />)
  }

  return (
    <PlaylistsContainer>
      {playlistsData.map((playlist) => (
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

Playlists.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <SearchResultLayout>{page}</SearchResultLayout>
    </MainLayout>
  )
}
