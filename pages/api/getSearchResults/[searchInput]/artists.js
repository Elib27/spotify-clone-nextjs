import getSearchArtists from '../../../../lib/spotify/getSearchArtists'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function handle(req, res) {

  const { searchInput } = req.query
  const { accessToken } = await getServerSession(req, res, authOptions)

  const response = await getSearchArtists(accessToken,searchInput, 0)
  const data = await response.json()

  const artistResults = data?.artists?.items.map((item) => ({
    name: item?.name,
    cover_url: item?.images?.[1]?.url,
    id: item?.id
  }))

  res.status(200).json(artistResults)
}