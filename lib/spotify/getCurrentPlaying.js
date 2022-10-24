import getAccessToken from "./getAccessToken"

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1'

export default async function getCurrentPlaying() {
  
  const { access_token } = await getAccessToken()

  const response = await fetch(`${SEARCH_ENDPOINT}/me/player/currently-playing`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}