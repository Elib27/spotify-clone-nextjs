import getSearchAlbums from '@/lib/spotify/getSearchAlbums'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'


export default async function handle(req, res) {

  const { searchInput } = req.query
  const { accessToken } = await getServerSession(req, res, authOptions)

  const response = await getSearchAlbums(accessToken, searchInput, 0)
  const data = await response.json()

  const albumResults = data?.albums?.items.map((item) => ({
    name: item?.name,
    artists: item?.artists.map((artist) => artist.name),
    releaseDate: item?.release_date,
    cover_url: item?.images?.[1]?.url,
    id: item?.id
  }))

  res.status(200).json(albumResults)
}