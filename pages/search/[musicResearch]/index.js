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

// données d'exemple

const withValdExampleCards = []
for(let i = 0; i < 10; i++) {
  withValdExampleCards.push({
    title: "Vald",
    description: "Par Spotify",
    cover_url: "https://i.scdn.co/image/ab67706c0000da848c25ac66aad012fcc84fd2e1"
  })
}

const artistsExampleCards = []
for(let i = 0; i < 10; i++) {
  artistsExampleCards.push({
    title:"Vald",
    description:"Artiste",
    cover_url:"https://i.scdn.co/image/ab6761610000f178bb5d08bce59cfcc825c301f4"
  })
}

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
        title={fetchedData?.artist}
        category="Artiste"
        cover_url={fetchedData?.image}
        link="/collection/tracks"
      />
      {fetchedData?.tracks && <TrackResults tracks={fetchedData.tracks}/>}
      <SearchResultSection
        title="Avec Vald"
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {withValdExampleCards.map((card, index) => (
          index < (cardsNumberPerRow) && (
            <MusicCard
              title={card.title}
              description={card.description}
              cover_url={card.cover_url}
              key={index}
            />
          )
        ))}
      </SearchResultSection>
      <SearchResultSection
        title="Artistes"
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {artistsExampleCards.map((card, index) => (
          index < (cardsNumberPerRow) && (
            <MusicCard
              title={card.title}
              description={card.description}
              cover_url={card.cover_url}
              isRoundImage
              key={index}
            />
          )
        ))}
      </SearchResultSection>
    </Container>
  )
}

SearchResult.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>

// Option choisie :
// recupere query de la page=> fetch api spotify => affiche les resultats (en fonction query et category)

/********************************************************************************************************/

// Autre option :
// recupere input => fetch api spotify => resultats dans state => affiche les resultats sur la page avec state