import styled from 'styled-components'
import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import useResizeObserver from '../hooks/useResizeObserver'
import PageContainer from '../components/shared/PageContainer'
import HomeShorcuts from '../components/homePage/HomeShorcuts'
import HomeSection from '../components/homePage/HomeSection'
import HomeCard from '../components/homePage/HomeCard'

const Title = styled.h2`  
  color: #fff;
  font-size: 2em;
  line-height: 1em;
  font-weight: 700;
  margin-bottom: 21.5px;
`
const CategorySections = styled.div``

export default function Home() {

  const WIDTH_LIMIT = useRef(230)
  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(4)
  const [welcomeMessage, setWelcomeMessage] = useState('Bonjour')

  useLayoutEffect(() => {
    const timeInHours = new Date().getHours()
    if (timeInHours >= 4 && timeInHours <= 18) {
      setWelcomeMessage('Bonjour')
    }
    else {
      setWelcomeMessage('Bonsoir')
    }
  }, [])

  useEffect(() => {
    const { width } = dimensions || {width: 900}
    const cardsNumber = Math.floor(width / WIDTH_LIMIT.current)
    if (cardsNumber >= 3 && cardsNumber <= 9) {
      setCardsNumberPerRow(cardsNumber)
    }
  }, [dimensions])

  const withValdExampleCards = []
  for(let i = 0; i < 10; i++) {
    withValdExampleCards.push({
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
        {withValdExampleCards.map((card, index) => (
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
          title="Écoutés récemment"
          cardsNumberPerRow={cardsNumberPerRow}
        >
          {withValdExampleCards.map((card, index) => (
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
        <HomeSection
          title="À ne pas manquer aujourd'hui"
          cardsNumberPerRow={cardsNumberPerRow}
        >
          {withValdExampleCards.map((card, index) => (
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
        <HomeSection
          title="Épisodes pour vous"
          cardsNumberPerRow={cardsNumberPerRow}
        >
          {withValdExampleCards.map((card, index) => (
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
      </div>
    </PageContainer>
  )
}