import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import getTopArtists from '@/lib/spotify/getTopArtists'

export default async function handler(req, res) {

  const { accessToken } = await getServerSession(req, res, authOptions)

  const { limit } = req.query

  const response = await getTopArtists(accessToken, limit)
  const data = await response.json()

  const topArtists = data.items.map(item => ({
    name: item?.name,
    image: item?.images?.[1]?.url ?? item?.images?.[0]?.url,
    id: item?.id,
  }))

  res.status(200).json(topArtists)
}