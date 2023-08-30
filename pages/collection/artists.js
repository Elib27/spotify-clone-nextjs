import useFollowedArtists from "@/hooks/useFollowedArtist"
import MainLayout from '@/components/shared/MainLayout'
import CollectionLayout from '@/components/collection/CollectionLayout'
import CollectionPageContainer from '@/components/collection/CollectionPageContainer'
import PlaylistCard from '@/components/collection/PlaylistCard'

export default function Artists() {

  const { data: followedArtists } = useFollowedArtists()

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