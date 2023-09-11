import styled from "styled-components"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import useResizeObserver from '@/hooks/useResizeObserver'
import useLikedTracks from "@/hooks/useLikedTracks"
import useSearchResults from "@/hooks/useSearchResults"
import MainLayout from '@/components/shared/MainLayout'
import SearchResultLayout from '@/components/searchPage/SearchResultLayout'
import BestResult from '@/components/searchPage/BestResult'
import TrackResults from '@/components/searchPage/TrackResults'
import SearchResultSection from '@/components/searchPage/SearchResultSection'
import MusicCard from '@/components/shared/MusicCard'
import NoResults from '@/components/searchPage/NoResults'

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
  const { searchQuery } = router.query

  const WIDTH_LIMIT = 200
  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(4)

  const { data: likedTracks } = useLikedTracks()
  const likedTracksIds = likedTracks?.map(track => track.id)

  const { data: searchResults } = useSearchResults('all', searchQuery)

  useEffect(() => {
    const { width } = dimensions || { width: 900 }
    const cardsNumber = Math.floor(width / WIDTH_LIMIT)
    if (cardsNumber >= 3 && cardsNumber <= 9) {
      setCardsNumberPerRow(cardsNumber)
    }
  }, [dimensions])


  if (!searchResults) return (null)

  if (searchResults && !searchResults?.bestResult?.title) {
    return (<NoResults searchValue={searchQuery} />)
  }

  return (
    <Container ref={containerRef}>
      <BestResult
        title={searchResults?.bestResult.title}
        category={searchResults?.bestResult.category}
        cover_url={searchResults?.bestResult.image}
      />
      {
        searchResults?.tracks?.length > 0 && (
          <TrackResults
            tracks={searchResults.tracks}
            likedTracksIds={likedTracksIds.current}
          />)
      }
      <SearchResultSection
        title="Artistes"
        data={searchResults?.artists}
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {searchResults?.artists && searchResults.artists.map((artist, index) => (
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
        data={searchResults?.albums}
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {searchResults?.albums.map((album, index) => (
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
        data={searchResults?.playlists}
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {searchResults?.playlists && searchResults.playlists.map((playlist, index) => (
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
        data={searchResults?.podcasts}
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {searchResults?.podcasts && searchResults.podcasts.map((podcast, index) => (
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
        data={searchResults?.episodes}
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {searchResults?.episodes && searchResults.episodes.map((episode, index) => (
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