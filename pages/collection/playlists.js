import useLikedTracks from "@/hooks/useLikedTracks"
import usePlaylists from "@/hooks/usePlaylists"
import useSavedEpisodes from "@/hooks/useSavedEpisodes"
import MainLayout from '@/components/shared/MainLayout'
import CollectionPageContainer from '@/components/collection/CollectionPageContainer'
import PlaylistBigCard from '@/components/collection/PlaylistBigCard'
import PlaylistCard from '@/components/collection/PlaylistCard'
import CollectionLayout from '@/components/collection/CollectionLayout'


export default function Playlists() {

  const { data: playlists } = usePlaylists(30)
  const { data: likedTracksData } = useLikedTracks()
  const { data: savedEpisodes } = useSavedEpisodes()

  const likedTracks = likedTracksData?.map(track => ({
    title: track.name,
    artist: track.artist.join(', '),
  }))

  if (!(playlists && likedTracks)) return

  return (
    <CollectionPageContainer title="Playlists">
      <PlaylistBigCard
        tracks={likedTracks.slice(0, 9)}
        tracksNumber={likedTracks.length}
      />
      <PlaylistCard
        title="Vos épisodes"
        cover_url="/episodes_cover.jpg"
        description={`${savedEpisodes?.length} épisodes`}
      />
      {playlists.map(playlist => (
        <PlaylistCard
          title={playlist.name}
          cover_url={playlist.image}
          description={playlist.description}
          key={playlist.id}
        />
      ))}
    </CollectionPageContainer>
  )
}
Playlists.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <CollectionLayout>{page}</CollectionLayout>
    </MainLayout>
  )
}