import getTrackRecommendations from "../../lib/spotify/getTrackRecommendations"

export default async function handler(req, res) {

  const seed_tracks = req.query?.seed_tracks
  const seed_artists = req.query?.seed_artists
  const seed_genres = req.query?.seed_genres

  const response = await getTrackRecommendations(100, seed_tracks, seed_artists, seed_genres)
  const data = await response.json()

  const tracksQueue = data.tracks.map(track => track.id)

  res.status(200).json(tracksQueue)
}