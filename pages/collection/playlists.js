import { useEffect, useState } from "react"
import CollectionPageContainer from "../../components/collection/CollectionPageContainer"
import PlaylistBigCard from "../../components/collection/PlaylistBigCard"
import PlaylistCard from "../../components/collection/PlaylistCard"
import CollectionLayout from "../../components/collection/CollectionLayout"


export default function Playlists() {

  const [playlists, setPlaylists] = useState(null)
  const [likedTracks, setLikedTracks] = useState(null)

  async function getPlaylists() {
    const response = await fetch('/api/getPlaylists')
    const data = await response.json()
    return data
  }

  async function getLikedTracks() {
    const response = await fetch('/api/getLikedTracks')
    const data = await response.json()
    const likedTracks = data.map(track => ({
      title: track.name,
      artist: track.artist.join(', '),
    }))
    return likedTracks
  }

  useEffect(() => {
    Promise.all([
      getPlaylists(), 
      getLikedTracks(),
    ])
    .then((data) => {
      setPlaylists(data[0])
      setLikedTracks(data[1])
    })
  }, [])

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
        description="42 épisodes"
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
Playlists.getLayout = page => <CollectionLayout>{page}</CollectionLayout>

