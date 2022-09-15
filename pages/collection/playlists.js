import styled from "styled-components"
import PlaylistLikedTracksCard from "../../components/PlaylistLikedTracksCard"
import PlaylistCard from "../../components/PlaylistCard"

const Container = styled.div`
  width: 100%;
  padding: 0 16px 32px 32px;
`
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  margin: 16px 0;
  line-height: 1.6;
`
const PlaylistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 24px;
`

const exampleTracks = [
  {title: 'Vettel', artist: 'Mister V'},
  {title: 'Journal Perso II', artist: 'Vald'},
  {title: 'Top album', artist: 'Mister V'},
  {title: 'Vettel', artist: 'Mister V'},
  {title: 'Vettel', artist: 'Mister V'},
  {title: 'Journal Perso II', artist: 'Vald'},
  {title: 'Top album', artist: 'Mister V'},
  {title: 'Journal Perso II', artist: 'Vald'},
  {title: 'Top album', artist: 'Mister V'},
]

export default function playlists() {
  return (
    <Container>
      <Title>Playlists</Title>
      <PlaylistsContainer>
        <PlaylistLikedTracksCard
          tracks={exampleTracks}
          likedTracksNumber={9}
        />
        <PlaylistCard
          title="Ma playlist n°3"
          cover_url="https://i.scdn.co/image/ab67656300005f1fa0725e9665df7b44bbd09f55"
          description="eliot"
        />
        <PlaylistCard
          title="Ma playlist n°3"
          cover_url="https://i.scdn.co/image/ab67656300005f1fa0725e9665df7b44bbd09f55"
          description="eliot"
        />
        <PlaylistCard
          title="Ma playlist n°3"
          cover_url="https://i.scdn.co/image/ab67656300005f1fa0725e9665df7b44bbd09f55"
          description="eliot"
        />
        <PlaylistCard
          title="Ma playlist n°3"
          cover_url="https://i.scdn.co/image/ab67656300005f1fa0725e9665df7b44bbd09f55"
          description="eliot"
        />
        <PlaylistCard
          title="Ma playlist n°3"
          cover_url="https://i.scdn.co/image/ab67656300005f1fa0725e9665df7b44bbd09f55"
          description="eliot"
        />
      </PlaylistsContainer>
    </Container>
  )
}
