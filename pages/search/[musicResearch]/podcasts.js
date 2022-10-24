import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'
import { useRouter } from "next/router"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import MusicCard from "../../../components/shared/MusicCard"
import NoResults from "../../../components/searchPage/NoResults"

const PodcastsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 24px;
`

export default function Podcasts() {
  const [fetchedData, setFetchedData] = useState()

  const router = useRouter()
  const { musicResearch } = router.query

  useEffect(() => {
    async function getFirstPodcasts() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}/podcasts?offset=0`)
      const data = await response.json()
      setFetchedData(data)
    }
    
    getFirstPodcasts()

  }, [musicResearch])

  useEffect(() => {
    console.log(fetchedData)
  }, [fetchedData])

if (!fetchedData) return (null)

if (!fetchedData?.podcastResults?.length) {
  return (<NoResults searchValue={musicResearch}/>)
}

return (
  <PodcastsContainer>
    {fetchedData?.podcastResults.map((podcast) => (
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

Podcasts.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>