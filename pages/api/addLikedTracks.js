import getRefreshedAccessToken from "../../lib/spotify/getRefreshedAccessToken.js"

const ENDPOINT = 'https://api.spotify.com/v1/me/tracks'

async function addLikedTracks(ids) {
  
  const { access_token } = await getRefreshedAccessToken()

  await fetch(`${ENDPOINT}?ids=${ids}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${access_token}`
    },
  })
}

export default async function handler(req, res) {

  const { ids } = req.query

  await addLikedTracks(ids)
  res.status(200).end()
}