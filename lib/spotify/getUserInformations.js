import getRefreshedAccessToken from "./getRefreshedAccessToken"

export default async function getUserInformations() {
  const USER_ENDPOINT = 'https://api.spotify.com/v1/me'

  const { access_token } = await getRefreshedAccessToken()
  
  const response = await fetch(USER_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  const data = await response.json()

  return data
}