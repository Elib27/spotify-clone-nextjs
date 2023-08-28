import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import getTrackRecommendations from '@/lib/spotify/getTrackRecommendations'

export default async function handler(req, res) {

  const { accessToken } = await getServerSession(req, res, authOptions)

  const seed_tracks = req.query?.seed_tracks
  const seed_artists = req.query?.seed_artists
  const seed_genres = req.query?.seed_genres

  const response = await getTrackRecommendations(accessToken, 100, seed_tracks, seed_artists, seed_genres)
  const data = await response.json()

  const tracksQueue = data.tracks.map(track => track.id)

  res.status(200).json(tracksQueue)
}