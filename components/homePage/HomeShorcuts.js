import styled from 'styled-components'
import ShortcutButton from './ShortcutButton'

const ShortcutSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-template-rows: repeat(2, 80px);
  grid-gap: 16px 24px;
  padding-bottom: 20px;
`

export default function HomeShorcuts() {
  return (
    <ShortcutSection>
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
