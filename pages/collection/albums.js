import styled from "styled-components"
import CollectionLayout from "../../components/collection/CollectionLayout"
import CollectionPageContainer from "../../components/collection/CollectionPageContainer"
import PlaylistCard from "../../components/collection/PlaylistCard"

export default function Albums() {
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

Albums.getLayout = page => <CollectionLayout>{page}</CollectionLayout>