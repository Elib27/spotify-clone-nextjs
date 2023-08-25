import styled from "styled-components"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import useResizeObserver from "../../../hooks/useResizeObserver"
import MainLayout from "../../../components/shared/MainLayout"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import BestResult from "../../../components/searchPage/BestResult"
import TrackResults from "../../../components/searchPage/TrackResults"
import SearchResultSection from "../../../components/searchPage/SearchResultSection"
import MusicCard from "../../../components/shared/MusicCard"
import NoResults from "../../../components/searchPage/NoResults"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-template-rows: auto;
  column-gap: 24px;
  row-gap: 32px;
  max-width: 1955px;
  margin-top: -15px;
  padding-right: 8px;
`

export default function SearchResult() {

  const router = useRouter()
  const { musicResearch } = router.query

  const WIDTH_LIMIT = 200
  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(4)

  const [fetchedData, setFetchedData] = useState(null)
  const likedTracksIds = useRef(null)

  useEffect(() => {
    async function fetchResults() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}`)
      const data = await response.json()
      setFetchedData(data[0])
    }
    async function getLikedTracksIds() {
      const response = await fetch('/api/getLikedTracks')
      const data = await response.json()
      const ids = data.map(track => track.id)
      likedTracksIds.current = ids;
    }
    fetchResults()
    getLikedTracksIds()
  }, [musicResearch])

  useEffect(() => {
    const { width } = dimensions || { width: 900 }
    const cardsNumber = Math.floor(width / WIDTH_LIMIT)
    if (cardsNumber >= 3 && cardsNumber <= 9) {
      setCardsNumberPerRow(cardsNumber)
    }
  }, [dimensions])

  if (!fetchedData) return (null)

  if (fetchedData && !fetchedData?.bestResult?.title) {
    return (<NoResults searchValue={musicResearch} />)
  }

  return (
    <Container ref={containerRef}>
      <BestResult
        title={fetchedData?.bestResult.title}
        category={fetchedData?.bestResult.category}
        cover_url={fetchedData?.bestResult.image}
      />
      {
        fetchedData?.tracks?.length > 0 && (
          <TrackResults
            tracks={fetchedData.tracks}
            likedTracksIds={likedTracksIds.current}
          />)
      }
      <SearchResultSection
        title="Artistes"
        data={fetchedData?.artists}
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {fetchedData?.artists && fetchedData.artists.map((artist, index) => (
          index < (cardsNumberPerRow) && (
            <MusicCard
              title={artist.name}
              description="Artiste"
              cover_url={artist.image}
              isRoundImage
              key={artist.id}
            />
          )
        ))}
      </SearchResultSection>
      <SearchResultSection
        title="Albums"
        data={fetchedData?.albums}
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {fetchedData?.albums.map((album, index) => (
          index < (cardsNumberPerRow) && (
            <MusicCard
              title={album.name}
              description={album.description}
              cover_url={album.image}
              key={album.id}
            />
          )
        ))}
      </SearchResultSection>
      <SearchResultSection
        title="Playlists"
        data={fetchedData?.playlists}
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {fetchedData?.playlists && fetchedData.playlists.map((playlist, index) => (
          index < (cardsNumberPerRow) && (
            <MusicCard
              title={playlist.name}
              description={`Par ${playlist.author}`}
              cover_url={playlist.image}
              key={playlist.id}
            />
          )
        ))}
      </SearchResultSection>
      <SearchResultSection
        title="Podcasts"
        data={fetchedData?.podcasts}
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {fetchedData?.podcasts && fetchedData.podcasts.map((podcast, index) => (
          index < (cardsNumberPerRow) && (
            <MusicCard
              title={podcast.name}
              description={podcast.author}
              cover_url={podcast.image}
              key={podcast.id}
            />
          )
        ))}
      </SearchResultSection>
      <SearchResultSection
        title="Episodes"
        data={fetchedData?.episodes}
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {fetchedData?.episodes && fetchedData.episodes.map((episode, index) => (
          index < (cardsNumberPerRow) && (
            <MusicCard
              title={episode.name}
              description={`${episode.publicationDate} · ${episode.duration} Min`}
              cover_url={episode.image}
              key={episode.id}
            />
          )
        ))}
      </SearchResultSection>
    </Container>
  )
}

SearchResult.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <SearchResultLayout>{page}</SearchResultLayout>
    </MainLayout>
  )
}