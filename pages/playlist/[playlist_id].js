import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentMusicId, changeCurrentPlaylist, changeTracksQueue, changeMusicIndexInQueue, togglePlaying } from '@/store/store'
import useLikedTracks from '@/hooks/useLikedTracks'
import useDeleteLikedTracks from '@/hooks/useDeleteLikedTracks'
import useAddLikedTracks from '@/hooks/useAddLikedTracks'
import usePlaylist from '@/hooks/usePlaylist'
import PlaylistPageLayout from '@/components/collection/PlaylistPageLayout'
import TrackItem from '@/components/shared/TrackItem'
import { convertMsToMinutesSeconds, convertMsToHourMinSecString } from '@/lib/convertTime'


export default function Playlist() {
  const router = useRouter()
  const { playlist_id } = router.query

  const dispatch = useDispatch()
  const music = useSelector(state => state.music)

  const { data: playlist } = usePlaylist(playlist_id)

  const { data: likedTracks } = useLikedTracks()
  const likedTrackIds = likedTracks?.map(track => track.id)

  const { mutate: deleteLikedTrack } = useDeleteLikedTracks()
  const { mutateAsync: addLikedTrack } = useAddLikedTracks()

  function togglePlayingPlaylist() {
    if (!playlist || !playlist.full_tracks) return
    if (music.currentPlaylist !== playlist_id) {
      dispatch(changeCurrentPlaylist(playlist_id))
      dispatch(changeCurrentMusicId(playlist.tracks[0].id))
      dispatch(changeTracksQueue(playlist.tracks.map(track => track.id)))
      dispatch(changeMusicIndexInQueue(0))
    }
    dispatch(togglePlaying())
  }

  const isPlaylistPlaying = (playlist_id === music.currentPlaylist) && music.isPlaying
  const playlistDurationMs = playlist?.tracks && playlist.tracks.reduce((acc, track) => acc + track.duration, 0)

  if (!playlist) return

  return (
    <PlaylistPageLayout
      title={playlist.name}
      description={playlist.description}
      cover_url={playlist.image}
      tracks_number={playlist.tracks.length}
      likes={playlist.followers}
      owner={playlist.owner}
      playlistDuration={!!playlistDurationMs && convertMsToHourMinSecString(playlistDurationMs)}
      isPlaying={isPlaylistPlaying}
      togglePlaylistPlaying={togglePlayingPlaylist}
      background="#555555"
    >
      {playlist.tracks.map((track, index) => (
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
          playlistId={playlist_id}
          isLiked={likedTrackIds && likedTrackIds.includes(track.id)}
          deleteLikedTrack={deleteLikedTrack}
          addLikedTrack={addLikedTrack}
          playDisabled={!playlist.full_tracks}
        />
      ))
      }
    </PlaylistPageLayout>
  )
}
