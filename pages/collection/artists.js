import styled from "styled-components"
import CollectionPageContainer from "../../components/collection/CollectionPageContainer"
import PlaylistCard from "../../components/collection/PlaylistCard"

export default function Artists() {
  return (
    <CollectionPageContainer title="Artistes">
      <PlaylistCard
        title="Lorenzo"
        cover_url="https://i.scdn.co/image/ab6761610000f178e640d227cd8994c95b15ba52"
        description="Artiste"
        isRoundImage
      />
      <PlaylistCard
        title="Lorenzo"
        cover_url="https://i.scdn.co/image/ab6761610000f178e640d227cd8994c95b15ba52"
        description="Artiste"
        isRoundImage
      />
      <PlaylistCard
        title="Lorenzo"
        cover_url="https://i.scdn.co/image/ab6761610000f178e640d227cd8994c95b15ba52"
        description="Artiste"
        isRoundImage
      />
      <PlaylistCard
        title="Lorenzo"
        cover_url="https://i.scdn.co/image/ab6761610000f178e640d227cd8994c95b15ba52"
        description="Artiste"
        isRoundImage
      />
    </CollectionPageContainer>
  )
}