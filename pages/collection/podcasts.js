import { useEffect, useState } from "react"
import MainLayout from '@/components/shared/MainLayout'
import CollectionPageContainer from '@/components/collection/CollectionPageContainer'
import PlaylistBigCard from '@/components/collection/PlaylistBigCard'
import PlaylistCard from '@/components/collection/PlaylistCard'
import CollectionLayout from '@/components/collection/CollectionLayout'

export default function Podcasts() {

  const [likedPodcasts, setLikedPodcasts] = useState(null)
  const [savedEpisodes, setSavedEpisodes] = useState(null)

  async function getLikedPodcasts() {
    const response = await fetch('/api/getLikedPodcasts')
    const data = await response.json()
    setLikedPodcasts(data)
  }

  async function getSavedEpisodes() {
    const response = await fetch('/api/getSavedEpisodes')
    const data = await response.json()
    const savedEpisodes = data.map(episode => ({
      title: episode.podcast,
      artist: episode.name
    }))
    setSavedEpisodes(savedEpisodes)
  }

  useEffect(() => {
    getLikedPodcasts()
    getSavedEpisodes()
  }, [])

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