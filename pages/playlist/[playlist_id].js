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

  const [tracks, setTracks] = useState(null)

  useEffect(() => {
    async function getPlaylist() {
      const response = await fetch(`/api/getPlaylist?playlist_id=${playlist_id}`)
      const data = await response.json()
      setTracks(data)
    }

    console.log('get tracks from playlist: ', playlist_id)
  }, [playlist_id])

  return (
    <PlaylistPageLayout
      // title={title}
      // description={description}
      // cover_url={cover_url}
      // background={background}
      // tracks_number={tracks_number}
    >
      {/* {tracks.map((track, index) => (
        <TrackItem
          name={track.name}
          artist={track.artist}
          album={track.album}
          key={track.id}
          id={track.id}
          cover_url={track.image}
          duration={track.duration}
          number={index}
        />
      ))
      } */}
    </PlaylistPageLayout>
  )
}
