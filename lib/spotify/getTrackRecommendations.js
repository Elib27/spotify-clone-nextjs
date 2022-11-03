import getAccessToken from "./getAccessToken"

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/recommendations'

export default async function getTrackRecommendations(limit, seed_tracks, seed_artists, seed_genres) {
  
  const { access_token } = await getAccessToken()

  const url = new URL(SEARCH_ENDPOINT)

  if (seed_tracks) url.searchParams.append('seed_tracks', seed_tracks)
  if (seed_artists) url.searchParams.append('seed_artists', seed_artists)
  if (seed_genres) url.searchParams.append('seed_genres', seed_genres)
  if (limit) url.searchParams.append('limit', limit)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}