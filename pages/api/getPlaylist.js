import getPlaylist from "../../lib/spotify/getPlaylist"
import { convertMsToMinutesSeconds } from "../../lib/convertTime"
import convertDateToAddedDate from "../../lib/convertDateToAddedDate"

export default async function handler(req, res) {

  const { playlist_id } = req.query

  const response = await getPlaylist(playlist_id)
  const data = await response.json()

  const tracks = data.tracks.items.map(item => ({
    name: item?.track?.name,
    artist: item?.track?.artists.map(track => track.name).join(', '),
    image: item?.track?.album?.images?.[2]?.url || item?.track?.album?.images?.[1]?.url || item?.track?.album?.images?.[0]?.url,
    album: item?.track?.album?.name,
    added_date: item?.added_at && convertDateToAddedDate(item.added_at),
    duration: item?.track?.duration_ms && convertMsToMinutesSeconds(item.track.duration_ms),
    explicit: item?.track?.explicit,
    id: item?.track?.id,
  }))

  const playlist = {
    name: data?.name,
    description: data?.description,
    image: data?.images?.[1]?.url || data?.images?.[0]?.url,
    followers: data?.followers?.total,
    owner: data?.owner?.display_name,
    tracks: tracks,
    id: data?.id,
  }

  res.status(200).json(playlist)
}