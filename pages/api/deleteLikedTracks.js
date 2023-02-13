import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

const ENDPOINT = 'https://api.spotify.com/v1/me/tracks'

async function deleteLikedTracks(access_token, ids) {
    
  await fetch(`${ENDPOINT}?ids=${ids}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${access_token}`
    },
  })
}

export default async function handler(req, res) {

  const { ids } = req.query
  const { accessToken } = await getServerSession(req, res, authOptions)

  await deleteLikedTracks(accessToken, ids)
  res.status(200).end()
}