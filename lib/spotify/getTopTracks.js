import getAccessToken from "./getAccessToken"

const TOP_TRACKS_ENDPOINTS = 'https://api.spotify.com/v1/me/top/tracks'

export default async function getTopTracks() {
  
  const { access_token } = await getAccessToken()

  const response = await fetch(TOP_TRACKS_ENDPOINTS, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const data = await response.json()

  return data.items
}