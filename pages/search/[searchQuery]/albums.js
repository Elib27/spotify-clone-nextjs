import styled from "styled-components"
import { useRouter } from 'next/router'
import useSearchResults from "@/hooks/useSearchResults"
import MainLayout from '@/components/shared/MainLayout'
import SearchResultLayout from '@/components/searchPage/SearchResultLayout'
import MusicCard from '@/components/shared/MusicCard'
import NoResults from '@/components/searchPage/NoResults'

const AlbumsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 24px;
`

export default function Playlists() {

  const router = useRouter()
  const { searchQuery } = router.query

  const { data: albums } = useSearchResults('albums', searchQuery)


  if (!albums) return (null)

  if (!albums?.length) {
    return (<NoResults searchValue={searchQuery} />)
  }

  return (
    <AlbumsContainer>
      {albums.map((album) => (
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