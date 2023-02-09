const SEARCH_ENDPOINT = 'https://api.spotify.com/v1'

export default async function getPlaylists(access_token) {

  const response = await fetch(`${SEARCH_ENDPOINT}/me/playlists?limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}