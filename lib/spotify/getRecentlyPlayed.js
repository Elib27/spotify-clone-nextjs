import getAccessToken from "./getAccessToken"

const ENDPOINT = 'https://api.spotify.com/v1'

export default async function getRecentlyPlayed() {
  
  const { access_token } = await getAccessToken()

  const response = await fetch(`${ENDPOINT}/me/player/recently-played?limit=10`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}