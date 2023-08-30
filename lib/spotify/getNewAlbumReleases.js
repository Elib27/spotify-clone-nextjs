const ENDPOINT = 'https://api.spotify.com/v1'

export default async function getNewAlbumReleases(access_token, limit) {

  const response = await fetch(`${ENDPOINT}/browse/new-releases?limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}