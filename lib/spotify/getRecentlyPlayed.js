const ENDPOINT = 'https://api.spotify.com/v1'

export default async function getRecentlyPlayed(access_token) {

  const response = await fetch(`${ENDPOINT}/me/player/recently-played?limit=20`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}