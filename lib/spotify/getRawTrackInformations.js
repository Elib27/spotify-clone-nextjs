import getRefreshedAccessToken from "./getRefreshedAccessToken"

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/tracks'

export default async function getRawTrackInformations(id) {
  
  const { access_token } = await getRefreshedAccessToken()

  const response = await fetch(`${SEARCH_ENDPOINT}/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}