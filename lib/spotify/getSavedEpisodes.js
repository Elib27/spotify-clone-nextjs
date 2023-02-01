import getRefreshedAccessToken from "./getRefreshedAccessToken"

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1'

export default async function getSavedEpisodes() {
  
  const { access_token } = await getRefreshedAccessToken()

  const response = await fetch(`${SEARCH_ENDPOINT}/me/episodes?limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}