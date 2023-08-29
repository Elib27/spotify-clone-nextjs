const ENDPOINT = 'https://api.spotify.com/v1'

export default async function getRecentlyPlayed(access_token, limit) {

  const response = await fetch(`${ENDPOINT}/me/player/recently-played?limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}