import getSearchPodcasts from '@/lib/spotify/getSearchPodcasts'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handle(req, res) {

  const { searchInput } = req.query
  const { accessToken } = await getServerSession(req, res, authOptions)

  const response = await getSearchPodcasts(accessToken, searchInput, 0)
  const data = await response.json()

  const podcastResults = data?.shows?.items.map((item) => ({
    name: item?.name,
    publisher: item?.publisher,
    cover_url: item?.images?.[1]?.url ?? item?.images?.[0]?.url,
    id: item?.id
  }))

  res.status(200).json(podcastResults)
}