import getAccessToken from "./getAccessToken"

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1'

export default async function getLikedTracks() {
  
  const { access_token } = await getAccessToken()

  const response = await fetch(`${SEARCH_ENDPOINT}/me/tracks?limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}