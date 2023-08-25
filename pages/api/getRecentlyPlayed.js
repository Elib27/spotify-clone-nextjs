import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import getRecentlyPlayed from "../../lib/spotify/getRecentlyPlayed"

export default async function handler(req, res) {

  const { accessToken } = await getServerSession(req, res, authOptions)

  const response = await getRecentlyPlayed(accessToken)
  const data = await response.json()

  const recentlyPlayedTracks = data.items.map(item => ({
    name: item?.track?.name,
    id: item?.track?.id,
    album: {
      name: item?.track?.album?.name,
      id: item?.track?.album?.id,
      image: item?.track?.album?.images[0]?.url,
      artist: item?.track?.artists[0]?.name,
    },
  }))

  res.status(200).json(recentlyPlayedTracks)
}