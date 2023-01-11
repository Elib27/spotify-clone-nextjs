import getAccessToken from "../../lib/spotify/getAccessToken.js"

const ENDPOINT = 'https://api.spotify.com/v1/search'

async function addLikedTracks(ids) {
  
  const { access_token } = await getAccessToken()

  const response = await fetch(`${ENDPOINT}?ids=${ids}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${access_token}`
    },
  })
  return response
  
}

export default async function handler(req, res) {

  const { ids } = req.query

  await addLikedTracks(ids)
  res.status(200)
}