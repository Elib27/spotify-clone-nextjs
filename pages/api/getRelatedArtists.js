import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import getRelatedArtists from '@/lib/spotify/getRelatedArtists'

export default async function handler(req, res) {

  const { accessToken } = await getServerSession(req, res, authOptions)

  const { artist_id } = req.query

  const data = await getRelatedArtists(accessToken, artist_id)

  const recommandedArtists = data.artists.map(item => ({
    name: item?.name,
    image: item?.images?.[1]?.url ?? item?.images?.[0]?.url,
    id: item?.id,
  }))

  res.status(200).json(recommandedArtists)
}