import styled from "styled-components"
import PlaylistHeader from "../../components/PlayListHeader"

const Container = styled.div`

`

export default function episodes() {
  return (
    <Container>
      <PlaylistHeader
        title="Vos épisodes"
        cover_url="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        background="linear-gradient(#5038a0 0, #291e50 100%)"
        owner="eliot"
        tracks_number={2}
      />
    </Container>
  )
}
