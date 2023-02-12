import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"


const ENDPOINT = 'https://api.spotify.com/v1/me/tracks'

async function deleteLikedTracks(ids) {
  
  const { accessToken } = await getServerSession(req, res, authOptions)
  
  await fetch(`${ENDPOINT}?ids=${ids}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
  })
}

export default async function handler(req, res) {

  const { ids } = req.query

  await deleteLikedTracks(ids)
  res.status(200).end()
}