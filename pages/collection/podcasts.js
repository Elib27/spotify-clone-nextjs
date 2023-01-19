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
  const [savedEpisodes, setSavedEpisodes] = useState(null)

  async function getLikedPodcasts() {
    const response = await fetch('/api/getLikedPodcasts')
    const data = await response.json()
    return data
  }

  async function getSavedEpisodes() {
    const response = await fetch('/api/getSavedEpisodes')
    const data = await response.json()
    const savedEpisodes = data.map(episode => ({
      title: episode.podcast,
      artist: episode.name
    }))
    return savedEpisodes
  }


  useEffect(() => {
    Promise.all([
      getLikedPodcasts(),
      getSavedEpisodes()
    ])
    .then((data) => {
      setLikedPodcasts(data[0])
      setSavedEpisodes(data[1])
    })
  }, [])

  if (!(likedPodcasts && savedEpisodes)) return

  return (
    <CollectionPageContainer title="Podcasts">
      <PlaylistBigCard
        isEpisodes
        tracks={savedEpisodes.slice(0, 7)}
        tracksNumber={savedEpisodes.length}
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