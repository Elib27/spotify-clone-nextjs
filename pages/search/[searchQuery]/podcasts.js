import styled from "styled-components"
import { useRouter } from 'next/router'
import useSearchResults from "@/hooks/useSearchResults"
import MainLayout from '@/components/shared/MainLayout'
import SearchResultLayout from '@/components/searchPage/SearchResultLayout'
import MusicCard from '@/components/shared/MusicCard'
import NoResults from '@/components/searchPage/NoResults'

const PodcastsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 24px;
`

export default function Podcasts() {

  const router = useRouter()
  const { searchQuery } = router.query

  const { data: podcasts } = useSearchResults('podcasts', searchQuery)

  if (!podcasts) return (null)

  if (!podcasts?.length) {
    return (<NoResults searchValue={searchQuery} />)
  }

  return (
    <PodcastsContainer>
      {podcasts.map((podcast) => (
        <MusicCard
          title={podcast.name}
          cover_url={podcast.cover_url}
          description={podcast.publisher}
          key={podcast.id}
        />
      ))}
    </PodcastsContainer>
  )
}

Podcasts.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <SearchResultLayout>{page}</SearchResultLayout>
    </MainLayout>
  )
}