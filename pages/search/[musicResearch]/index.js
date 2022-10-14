import styled from "styled-components"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import useResizeObserver from "../../../hooks/useResizeObserver"
import BestResult from "../../../components/searchPage/BestResult"
import TrackResults from "../../../components/searchPage/TrackResults"
import SearchResultSection from "../../../components/searchPage/SearchResultSection"
import MusicCard from "../../../components/shared/MusicCard"

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

  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(4)

  const [fetchedData, setFetchedData] = useState(null)

  useEffect(() => {
    async function fetchResults() {
      const response = await fetch(`/api/getSearchResults/${musicResearch}`)
      const data = await response.json()
      setFetchedData(data[0])
      console.log(data[0], data[1])
    }
    fetchResults()
  }, [musicResearch])

  useEffect(() => {
    const { width } = dimensions || {width: 900}
    const cardsNumber = Math.floor(width / 230)
    if (cardsNumber >= 3 && cardsNumber <= 9) {
      setCardsNumberPerRow(cardsNumber)
    }
  }, [dimensions])

  return (
    <Container ref={containerRef}>
      <BestResult
        title={fetchedData?.bestResult.title}
        category={fetchedData?.bestResult.category}
        cover_url={fetchedData?.bestResult.image}
        link='/'
      />
      {fetchedData?.tracks && <TrackResults tracks={fetchedData.tracks}/>}
      <SearchResultSection
        title="Artistes"
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
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {fetchedData?.albums && fetchedData.albums.map((album, index) => (
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

SearchResult.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>


// Afficher page après fetch pour eviter temps de chargement visible (setLoading, isLoading) et image sans src?
// Eviter les erreurs
// précharger les différentes pages sous [musicResearch]

// infinite scroll
// nouvelle page API pour rechercher spéfifiquement chaque catégorie