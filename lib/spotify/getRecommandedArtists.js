import getRefreshedAccessToken from "./getRefreshedAccessToken"

const ENDPOINT = 'https://api.spotify.com/v1'

export default async function getRecommandedArtists(id) {
  
  const { access_token } = await getRefreshedAccessToken()

  const response = await fetch(`${ENDPOINT}/artists/${id}/related-artists`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const data = await response.json()

  return data
}