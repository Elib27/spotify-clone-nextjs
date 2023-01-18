import { useEffect, useState } from "react"
import CollectionPageContainer from "../../components/collection/CollectionPageContainer"
import PlaylistBigCard from '../../components/collection/PlaylistBigCard'
import PlaylistCard from '../../components/collection/PlaylistCard'
import CollectionLayout from '../../components/collection/CollectionLayout'

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

export default function Podcasts() {

  const [likedPodcasts, setLikedPodcasts] = useState(null)

  async function getLikedPodcasts() {
    const response = await fetch('/api/getLikedPodcasts')
    const data = await response.json()
    setLikedPodcasts(data)
    console.log(data)
  }

  useEffect(() => {
    getLikedPodcasts()
  }, [])

  if (!likedPodcasts) return

  return (
    <CollectionPageContainer title="Podcasts">
      <PlaylistBigCard
        isEpisodes
        tracks={exampleTracks}
        tracksNumber={4}
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

Podcasts.getLayout = page => <CollectionLayout>{page}</CollectionLayout>