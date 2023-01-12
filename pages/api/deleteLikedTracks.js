import getAccessToken from "../../lib/spotify/getAccessToken.js"

const ENDPOINT = 'https://api.spotify.com/v1/me/tracks'

async function deleteLikedTracks(ids) {
  
  const { access_token } = await getAccessToken()
  
  await fetch(`${ENDPOINT}?ids=${ids}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${access_token}`
    },
  })
}

export default async function handler(req, res) {

  const { ids } = req.query

  await deleteLikedTracks(ids)
  res.status(200).end()
}