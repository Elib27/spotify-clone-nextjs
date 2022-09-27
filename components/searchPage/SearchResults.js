import styled from "styled-components"
import { useState, useEffect, useRef } from "react"
import useResizeObserver from "../../hooks/useResizeObserver"
import BestResult from "./BestResult"
import TrackResults from "./TrackResults"
import SearchResultSection from "./SearchResultSection"
import MusicCard from "../shared/MusicCard"

const Container = styled.div`
  margin-top: -15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-template-rows: auto;
  column-gap: 24px;
  row-gap: 32px;
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

export default function SearchResults({musicResearch}) {

  const WIDTH_LIMIT = useRef(230)
  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(4)

  useEffect(() => {
    const { width } = dimensions || {width: 900}
    const cardsNumber = Math.floor(width / WIDTH_LIMIT.current)
    if (cardsNumber >= 3 && cardsNumber <= 9) {
      setCardsNumberPerRow(cardsNumber)
    }
  }, [dimensions])

  return (
    <Container ref={containerRef}>
      <BestResult
        title={musicResearch}
        category="Artiste"
        cover_url="https://i.scdn.co/image/ab6761610000f178bb5d08bce59cfcc825c301f4"
        link="/collection/tracks"
      />
      <TrackResults />
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
