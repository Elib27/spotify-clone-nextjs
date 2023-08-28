import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import getTopTracks from '@/lib/spotify/getTopTracks'

export default async function handler(req, res) {

  const { accessToken } = await getServerSession(req, res, authOptions)

  const data = await getTopTracks(accessToken)

  const top_tracks = data.map(track => ({
    name: track.name,
    artist: track.artists[0].name,
    album: track.album.name,
    popularity: track.popularity
  }))

  res.status(200).json(top_tracks)
}