import styled from 'styled-components'
import Track from './Track'
import convertMsToMinutesSeconds from '../../lib/convertMsToMinutesSeconds'

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

export default function TrackResults({ tracks }) {
  if (!tracks) {
    return null
  }
  return (
    <Container>
      <TopTitle>Titres</TopTitle>
      <TracksContainer>
        {tracks.map((track, index) => {
          if (index < 4) {
            return (
              <Track
                title={track.title} 
                artist={track.artist}
                cover_url={track.cover_url}
                duration={convertMsToMinutesSeconds(track.duration)}
                explicit={track.explicit}
                liked
                key={track.id}
              />
            )
          }
        })}
      </TracksContainer>
    </Container>
  )
}
