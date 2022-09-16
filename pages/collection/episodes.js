import styled from "styled-components"
import PlaylistHeader from "../../components/shared/PlayListHeader"

const Container = styled.div`
  padding-bottom: 32px;
`

export default function episodes() {
  return (
    <Container>
      <PlaylistHeader
        title="Vos épisodes"
        background="linear-gradient(#056753 0, #023329 100%)"
        owner="eliot"
        tracks_number={2}
        isPodcastPlaylist
      />
    </Container>
  )
}
