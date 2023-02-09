const ENDPOINT = 'https://api.spotify.com/v1'

export default async function getTopArtists(access_token) {

  const response = await fetch(`${ENDPOINT}/me/top/artists?limit=10`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}