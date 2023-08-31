import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import deleteLikedTracks from '@/lib/spotify/deleteLikedTracks'

export default async function handler(req, res) {

  const { accessToken } = await getServerSession(req, res, authOptions)

  const { ids } = req.query

  await deleteLikedTracks(accessToken, ids)
  res.status(200).end()
}