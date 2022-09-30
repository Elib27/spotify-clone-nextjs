import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react'
import useResizeObserver from '../../hooks/useResizeObserver'
import ShortcutButton from './ShortcutButton'

const ShortcutSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({cardsNumberPerRow}) => cardsNumberPerRow}, minmax(222px, 1fr));
  grid-gap: 16px 24px;
  padding-bottom: 20px;
`

export default function HomeShorcuts() {
  
  const containerRef = useRef(null)
  const dimensions = useResizeObserver(containerRef)
  const [cardsNumberPerRow, setCardsNumberPerRow] = useState(3)

  useEffect(() => {
    const { width } = dimensions || {width: 900}
    if (width < 850) {
      setCardsNumberPerRow(2)
    }
    else {
      setCardsNumberPerRow(3)
    }
  }, [dimensions])

  return (
    <ShortcutSection
      ref={containerRef}
      cardsNumberPerRow={cardsNumberPerRow}
    >
      <ShortcutButton
        title="Vos épisodes"
        link="/collection/episodes"
      />
      <ShortcutButton
        title="Vélo"
        link="/collection/episodes"
        cover_url="/podcastCover1.jpg"
      />
      <ShortcutButton
        title="Vélo"
        link="/collection/episodes"
        cover_url="/podcastCover1.jpg"
      />
      <ShortcutButton
        title="Vélo"
      link="/collection/episodes"
        cover_url="/podcastCover1.jpg"
      />
      <ShortcutButton
        title="Vélo"
        link="/collection/episodes"
        cover_url="/podcastCover1.jpg"
      />
      <ShortcutButton
        title="Vélo"
        link="/collection/episodes"
        cover_url="/podcastCover1.jpg"
      />
    </ShortcutSection>
  )
}
