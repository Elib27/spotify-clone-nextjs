import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import getRecommandedArtists from "../../lib/spotify/getRecommandedArtists"

export default async function handler(req, res) {
  
  const { artist_id } = req.query
  const { accessToken } = await getServerSession(req, res, authOptions)
  
  const data = await getRecommandedArtists(accessToken, artist_id)

  const recommandedArtists = data.artists.map(item => ({
    name: item?.name,
    image: item?.images?.[1]?.url ?? item?.images?.[0]?.url,
    id: item?.id,
  }))

  res.status(200).json(recommandedArtists)
}