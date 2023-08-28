import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import getNewAlbumReleases from '@/lib/spotify/getNewAlbumReleases'

export default async function handler(req, res) {

  const { accessToken } = await getServerSession(req, res, authOptions)

  const response = await getNewAlbumReleases(accessToken)
  const data = await response.json()

  const newAlbums = data.albums.items.map(item => ({
    name: item?.name,
    artists: item?.artists.map(artist => artist.name).join(', '),
    image: item?.images?.[1]?.url ?? item?.images?.[0]?.url,
    id: item?.id,
  }))

  res.status(200).json(newAlbums)
}