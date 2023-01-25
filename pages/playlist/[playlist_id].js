import styled from "styled-components"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import PlaylistPageLayout from "../../components/collection/PlaylistPageLayout"
import TrackItem from "../../components/shared/TrackItem"
import { convertMsToMinutesSeconds, convertMsToHourMinSecString } from "../../lib/convertTime"

const PlaylistTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`

export default function Playlist() {
  const router = useRouter()
  const { playlist_id } = router.query

  const [playlistInformations, setPlaylistInformations] = useState(null)
  const [likedTrackIds, setLikedTrackIds] = useState(null)

  useEffect(() => {
    async function getPlaylist() {
      const response = await fetch(`/api/getPlaylist?playlist_id=${playlist_id}`)
      const data = await response.json()
      setPlaylistInformations(data)
      console.log(data)
    }
    async function getLikedTracksIds() {
      const response = await fetch('/api/getLikedTracks')
      const data = await response.json()
      const ids = data.map(track => track.id)
      setLikedTrackIds(ids)
    }
    getLikedTracksIds()
    getPlaylist()
  }, [playlist_id])

  async function addLikedTrack(id) {
    setLikedTrackIds(prev => [...prev, id])
    await fetch(`/api/addLikedTracks?ids=${id}`)
  }

  async function deleteLikedTrack(id) {
    setLikedTrackIds(prev => prev.filter(trackId => trackId !== id))
    await fetch(`/api/deleteLikedTracks?ids=${id}`)
  }

  const playlistDurationMs = playlistInformations?.tracks && playlistInformations.tracks.reduce((acc, track) => acc + track.duration, 0)

  if (!playlistInformations) return

  return (
    <PlaylistPageLayout
      title={playlistInformations.name}
      description={playlistInformations.description}
      cover_url={playlistInformations.image}
      tracks_number={playlistInformations.tracks.length}
      likes={playlistInformations.followers}
      owner={playlistInformations.owner}
      playlistDuration={playlistDurationMs && convertMsToHourMinSecString(playlistDurationMs)}
      background="blue"
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
          duration={convertMsToMinutesSeconds(track.duration)}
          addedDate={track.added_date}
          number={index + 1}
          isLiked={likedTrackIds && likedTrackIds.includes(track.id)}
          deleteLikedTrack={deleteLikedTrack}
          addLikedTrack={addLikedTrack}
        />
      ))
      }
    </PlaylistPageLayout>
  )
}
