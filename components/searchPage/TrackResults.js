import styled from 'styled-components'
import Track from './Track'

const Container = styled.div`
  grid-column: 3 / -1;
`
const TopTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  padding-bottom: 16px;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  line-height: 1.6;
`
const TracksContainer = styled.div`
  width: 100%;
  position: relative;
`

export default function TrackResults() {
  return (
    <Container>
      <TopTitle>Titres</TopTitle>
      <TracksContainer>
        <Track
          title="Désaccordé"
          artist="Vald"
          cover_url="https://i.scdn.co/image/ab67616d0000485182f6c9fecc589fb8a1d506f9"
          duration="3:34"
          explicit
          liked
        />
        <Track
          title="Désaccordé"
          artist="Vald"
          cover_url="https://i.scdn.co/image/ab67616d0000485182f6c9fecc589fb8a1d506f9"
          duration="3:34"
          explicit
        />
        <Track
          title="Désaccordé"
          artist="Vald"
          cover_url="https://i.scdn.co/image/ab67616d0000485182f6c9fecc589fb8a1d506f9"
          duration="3:34"
          explicit
        />
        <Track
          title="Désaccordé"
          artist="Vald"
          cover_url="https://i.scdn.co/image/ab67616d0000485182f6c9fecc589fb8a1d506f9"
          duration="3:34"
          explicit
          liked
        />
      </TracksContainer>
    </Container>
  )
}
