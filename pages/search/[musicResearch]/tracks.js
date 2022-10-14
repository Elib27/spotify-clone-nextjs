import styled from "styled-components"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"
import TracksContainer from "../../../components/shared/TracksContainer"
import LikedTrack from "../../../components/collection/LikedTrack"

const Container = styled.div`

`

export default function Tracks() {
  return (
    <Container>
      <TracksContainer columnTitles={['#', 'titre', 'album', 'ajouté le']} >
        <LikedTrack
          title="Top album"
          artist="Mister V"
          album="Double V"
          cover_url="https://i.scdn.co/image/ab67616d000048513fa6647c6ba06e64e0f1ff47"
          explicit={true}
          addedDate={3}
          duration="3:12"
          number={1}
        />
        <LikedTrack
          title="Top album"
          artist="Mister V"
          album="Double V"
          cover_url="https://i.scdn.co/image/ab67616d000048513fa6647c6ba06e64e0f1ff47"
          explicit={false}
          addedDate={3}
          duration="3:12"
          number={2}
        />
        <LikedTrack
          title="Top album"
          artist="Mister V"
          album="Double V"
          cover_url="https://i.scdn.co/image/ab67616d000048513fa6647c6ba06e64e0f1ff47"
          explicit={true}
          addedDate={3}
          duration="3:12"
          number={3}
        />
        <LikedTrack
          title="Top album"
          artist="Mister V"
          album="Double V"
          cover_url="https://i.scdn.co/image/ab67616d000048513fa6647c6ba06e64e0f1ff47"
          explicit={false}
          addedDate={3}
          duration="3:12"
          number={4}
        />
      </TracksContainer>
    </Container>
  )
}

Tracks.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>
