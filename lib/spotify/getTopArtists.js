import getRefreshedAccessToken from "./getRefreshedAccessToken"

const ENDPOINT = 'https://api.spotify.com/v1'

export default async function getTopArtists() {
  
  const { access_token } = await getRefreshedAccessToken()

  const response = await fetch(`${ENDPOINT}/me/top/artists?limit=10`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}