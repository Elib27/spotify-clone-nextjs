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

function convertMsToMinutesSeconds(ms) {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor(((ms % 60000) / 1000)).padStart(2, '0')
  return `${minutes}:${seconds}`
}

export default function TrackResults({ tracks }) {
  return (
    <Container>
      <TopTitle>Titres</TopTitle>
      <TracksContainer>
        {tracks.map((track) => {
          <Track
            title={track.title}
            artist={track.artist}
            cover_url={track.image}
            duration={track.duration}
            explicit
            liked
          />
        })}
      </TracksContainer>
    </Container>
  )
}
