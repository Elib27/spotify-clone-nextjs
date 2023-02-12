import { useEffect, useState } from "react"
import MainLayout from "../../components/shared/MainLayout"
import CollectionLayout from "../../components/collection/CollectionLayout"
import CollectionPageContainer from "../../components/collection/CollectionPageContainer"
import PlaylistCard from "../../components/collection/PlaylistCard"

export default function Artists() {

  const [followedArtists, setFollowedArtists] = useState(null)

  async function getFollowedArtists() {
    const response = await fetch('/api/getFollowedArtists')
    const data = await response.json()
    setFollowedArtists(data)
  }

  useEffect(() => {
    getFollowedArtists()
  }, [])

  if (!followedArtists) return null

  return (
    <CollectionPageContainer title="Artistes">
      {followedArtists.map(artist => (
        <PlaylistCard
          title={artist.name}
          cover_url={artist.image}
          description="Artiste"
          key={artist.id}
          isRoundImage
        />
      ))}
    </CollectionPageContainer>
  )
}

Artists.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <CollectionLayout>{page}</CollectionLayout>
    </MainLayout>
  )
}