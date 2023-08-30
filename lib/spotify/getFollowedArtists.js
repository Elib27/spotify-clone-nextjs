const SEARCH_ENDPOINT = 'https://api.spotify.com/v1'

export default async function getFollowedArtists(access_token, limit) {

  const response = await fetch(`${SEARCH_ENDPOINT}/me/following?type=artist&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return response
}