const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/tracks'

export default async function getRawTrackInformations(access_token, id) {

  const response = await fetch(`${SEARCH_ENDPOINT}/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}