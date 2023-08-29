const SEARCH_ENDPOINT = 'https://api.spotify.com/v1'

export default async function getPlaylists(access_token, limit) {

  const response = await fetch(`${SEARCH_ENDPOINT}/me/playlists?limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}