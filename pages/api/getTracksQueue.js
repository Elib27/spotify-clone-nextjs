import getTrackRecommendations from "../../lib/spotify/getTrackRecommendations"

export default async function getTracksQueue(req, res) {

  const seed_tracks = req.query?.seed_tracks
  const seed_artists = req.query?.seed_artists
  const seed_genres = req.query?.seed_genres

  const response = await getTrackRecommendations(50, seed_tracks, seed_artists, seed_genres)
  const data = await response.json()
  
  const tracksQueue = data.tracks.map(track => ({
    name: track.name,
    artists: track.artists.map(artist => artist.name),
    image: track.album.images[0].url,
    album: track.album.name,
    id: track.id,
    soundType: track.type,
  }))

  res.status(200).json(tracksQueue)
}