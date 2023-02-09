const SEARCH_ENDPOINT = 'https://api.spotify.com/v1'

export default async function getPlaylist(access_token, id) {

  const response = await fetch(`${SEARCH_ENDPOINT}/playlists/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}