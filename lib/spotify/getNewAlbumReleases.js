import getAccessToken from "./getAccessToken"

const ENDPOINT = 'https://api.spotify.com/v1'

export default async function getNewAlbumReleases() {
  
  const { access_token } = await getAccessToken()

  const response = await fetch(`${ENDPOINT}/browse/new-releases?limit=20`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}