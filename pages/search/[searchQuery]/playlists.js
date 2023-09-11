import styled from "styled-components"
import { useRouter } from 'next/router'
import useSearchResults from "@/hooks/useSearchResults"
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

  const router = useRouter()
  const { searchQuery } = router.query

  const { data: playlists } = useSearchResults('playlists', searchQuery)


  if (!playlists) return (null)

  if (!playlists?.length) {
    return (<NoResults searchValue={searchQuery} />)
  }

  return (
    <PlaylistsContainer>
      {playlists.map((playlist) => (
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
