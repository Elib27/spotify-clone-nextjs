const ENDPOINT = 'https://api.spotify.com/v1'

export default async function getRecommandedArtists(access_token, id) {

  const response = await fetch(`${ENDPOINT}/artists/${id}/related-artists`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const data = await response.json()

  return data
}