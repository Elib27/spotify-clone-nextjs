import styled from "styled-components"
import CollectionPageContainer from "../../components/CollectionPageContainer"
import PlaylistCard from "../../components/PlaylistCard"


export default function albums() {
  return (
    <CollectionPageContainer title="Albums">
      <PlaylistCard
        title="V"
        description="Vald"
        cover_url="https://i.scdn.co/image/ab67616d00001e02d786d5d4d12fe3e33aec8752"
      />
      <PlaylistCard
        title="V"
        description="Vald"
        cover_url="https://i.scdn.co/image/ab67616d00001e02d786d5d4d12fe3e33aec8752"
      />
      <PlaylistCard
        title="V"
        description="Vald"
        cover_url="https://i.scdn.co/image/ab67616d00001e02d786d5d4d12fe3e33aec8752"
      />
    </CollectionPageContainer>
  )
}
