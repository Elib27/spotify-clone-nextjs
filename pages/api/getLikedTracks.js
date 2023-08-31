import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import getLikedTracks from '@/lib/spotify/getLikedTracks'
import { convertMsToMinutesSeconds } from '@/lib/convertTime'
import convertDateToAddedDate from '@/lib/convertDateToAddedDate'


export default async function handler(req, res) {

  const { accessToken } = await getServerSession(req, res, authOptions)

  const { limit } = req.query

  const response = await getLikedTracks(accessToken, limit)
  const data = await response.json()

  const likedTracks = data.items.map(item => ({
    name: item.track?.name,
    artist: item.track?.artists.map(track => track.name),
    album: item.track?.album?.name,
    image: item.track?.album?.images?.[1]?.url ?? item.track?.album?.images?.[0]?.url,
    explicit: item.track?.explicit,
    addedDate: item?.added_at && convertDateToAddedDate(item.added_at),
    duration: item.track?.duration_ms && convertMsToMinutesSeconds(item.track.duration_ms),
    id: item.track?.id,
  }))

  res.status(200).json(likedTracks)
}