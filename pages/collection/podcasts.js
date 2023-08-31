import useSavedEpisodes from "@/hooks/useSavedEpisodes"
import useLikedPodcasts from "@/hooks/useLikedPodcasts"
import MainLayout from '@/components/shared/MainLayout'
import CollectionPageContainer from '@/components/collection/CollectionPageContainer'
import PlaylistBigCard from '@/components/collection/PlaylistBigCard'
import PlaylistCard from '@/components/collection/PlaylistCard'
import CollectionLayout from '@/components/collection/CollectionLayout'

export default function Podcasts() {

  const { data: savedEpisodesData } = useSavedEpisodes()
  const { data: likedPodcasts } = useLikedPodcasts()

  const savedEpisodes = savedEpisodesData?.map(episode => ({
    title: episode.podcast,
    artist: episode.name
  }))

  if (!(likedPodcasts)) return

  return (
    <CollectionPageContainer title="Podcasts">
      <PlaylistBigCard
        isEpisodes
        tracks={savedEpisodes?.slice(0, 7) || null}
        tracksNumber={savedEpisodes?.length || 17}
      />
      {likedPodcasts.map(podcast => (
        <PlaylistCard
          title={podcast.name}
          cover_url={podcast.image}
          description={podcast.artist}
          key={podcast.id}
        />
      ))}
    </CollectionPageContainer>
  )
}

Podcasts.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <CollectionLayout>{page}</CollectionLayout>
    </MainLayout>
  )
}