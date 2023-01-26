import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import useResizeObserver from '../hooks/useResizeObserver'
import PageContainer from '../components/shared/PageContainer'
import HomeShorcuts from '../components/homePage/HomeShorcuts'
import HomeSection from '../components/homePage/HomeSection'
import HomeCard from '../components/homePage/HomeCard'
import MusicCard from '../components/shared/MusicCard'

const Title = styled.h2`  
  color: #fff;
  font-size: 2em;
  line-height: 1em;
  font-weight: 700;
  margin-bottom: 21.5px;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
`

export default function Home() {

  const WIDTH_LIMIT = 210
  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(4)
  const [favoriteArtists, setFavoriteArtists] = useState(null)

  useEffect(() => {
    const { width } = dimensions || {width: 900}
    let cardsNumber = Math.floor(width / WIDTH_LIMIT)
    if (cardsNumber < 3) cardsNumber = 3
    else if (cardsNumber > 9) cardsNumber = 9
    setCardsNumberPerRow(cardsNumber)
  }, [dimensions])

  useEffect(() => {
    async function getFavoriteArtists() {
      const response = await fetch('/api/getTopArtists')
      const data = await response.json()
      setFavoriteArtists(data)
      console.log(data)
    }
    getFavoriteArtists()
  }, [])

  function getWelcomeMessage() {
    const timeInHours = new Date().getHours()
    if (timeInHours >= 4 && timeInHours < 18) {
      return "Bonjour"
    }
    else {
      return "Bonsoir"
    }
  }

  const welcomeMessage = getWelcomeMessage() || 'Bonjour'

  const podcastExampleCards = []
  for(let i = 0; i < 15; i++) {
    podcastExampleCards.push({
      title: "Un Bon Moment",
      description: "Kyan Khojandi & Navo",
      cover_url: "https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
    })
  }

  return (
    <PageContainer>
      <Title>{welcomeMessage}</Title>
      <HomeShorcuts />
      <HomeSection
        title="Vos émissions"
        cardsNumberPerRow={cardsNumberPerRow}
      >
        {podcastExampleCards.map((card, index) => (
          index < (cardsNumberPerRow) && (
            <HomeCard
              title={card.title}
              artist={card.description}
              cover_url={card.cover_url}
              key={index}
            />
          )
        ))}
      </HomeSection>
      <div ref={containerRef}>
        <HomeSection
          title="Vos artistes préférés"
          cardsNumberPerRow={cardsNumberPerRow}
        >
          {favoriteArtists && favoriteArtists.map((artist, index) => (
            index < (cardsNumberPerRow) && (
              <MusicCard
                title={artist.name}
                cover_url={artist.image}
                description="Artiste"
                key={artist.id}
                isRoundImage
              />
            )
          ))}
        </HomeSection>
      </div>
    </PageContainer>
  )
}