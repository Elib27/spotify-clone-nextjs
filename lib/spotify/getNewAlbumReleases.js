const ENDPOINT = 'https://api.spotify.com/v1'

export default async function getNewAlbumReleases(access_token) {

  const response = await fetch(`${ENDPOINT}/browse/new-releases?limit=20`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}