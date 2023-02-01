import getRefreshedAccessToken from "./getRefreshedAccessToken"

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1'

export default async function getLikedPodcasts() {
  
  const { access_token } = await getRefreshedAccessToken()

  const response = await fetch(`${SEARCH_ENDPOINT}/me/shows?limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}