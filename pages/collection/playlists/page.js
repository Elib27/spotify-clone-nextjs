import styled from "styled-components"
import CollectionPageContainer from "../../../components/collection/CollectionPageContainer"
import PlaylistBigCard from "../../../components/collection/PlaylistBigCard"
import PlaylistCard from "../../../components/collection/PlaylistCard"

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

export default function Playlists() {
  return (
    <CollectionPageContainer title="Playlists">
      <PlaylistBigCard
        tracks={exampleTracks}
        tracksNumber={9}
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
    </CollectionPageContainer>
  )
}
