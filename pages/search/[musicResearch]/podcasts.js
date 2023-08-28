import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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
  const [podcastResults, setPodcastResults] = useState(null)

  const router = useRouter()
  const { musicResearch } = router.query

  useEffect(() => {
    async function getFirstPodcasts() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}/podcasts`)
      const data = await response.json()
      setPodcastResults(data)
    }

    getFirstPodcasts()

  }, [musicResearch])

  if (!podcastResults) return (null)

  if (!podcastResults?.length) {
    return (<NoResults searchValue={musicResearch} />)
  }

  return (
    <PodcastsContainer>
      {podcastResults.map((podcast) => (
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