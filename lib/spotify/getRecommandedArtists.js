import getAccessToken from "./getAccessToken"

const ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks'

export default async function getRecommandedArtists() {
  
  const { access_token } = await getAccessToken()

  const response = await fetch(`${ENDPOINT}/`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const data = await response.json()

  return data.items
}