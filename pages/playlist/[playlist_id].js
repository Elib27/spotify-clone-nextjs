import styled from "styled-components"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import PlaylistPageLayout from "../../components/collection/PlaylistPageLayout"
import TrackItem from "../../components/shared/TrackItem"

const PlaylistTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`

export default function Playlist() {
  const router = useRouter()
  const { playlist_id } = router.query

  const [playlistInformations, setPlaylistInformations] = useState(null)

  useEffect(() => {
    async function getPlaylist() {
      const response = await fetch(`/api/getPlaylist?playlist_id=${playlist_id}`)
      const data = await response.json()
      setPlaylistInformations(data)
      console.log(data)
    }
    getPlaylist()
  }, [playlist_id])

  if (!playlistInformations) return

  return (
    <PlaylistPageLayout
      title={playlistInformations.name}
      description={playlistInformations.description}
      cover_url={playlistInformations.image}
      tracks_number={playlistInformations.tracks.length}
      likes={playlistInformations.followers}
      owner={playlistInformations.owner}
      // background={playlistInformations.background}
    >
      {playlistInformations.tracks.map((track, index) => (
        <TrackItem
          title={track.name}
          artist={track.artist}
          album={track.album}
          key={track.id}
          id={track.id}
          explicit={track.explicit}
          cover_url={track.image}
          duration={track.duration}
          addedDate={track.added_date}
          number={index + 1}
        />
      ))
      }
    </PlaylistPageLayout>
  )
}
