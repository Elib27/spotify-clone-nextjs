import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import getRawTrackInformations from "../../lib/spotify/getRawTrackInformations"

export default async function handler(req, res) {
  
  const { accessToken } = await getServerSession(req, res, authOptions)

  const { id } = req.query
  
  const response = await getRawTrackInformations(accessToken, id)

  const data = await response.json()

  const track = {
    name: data?.name,
    image: data?.album?.images[0]?.url,
    artists: data?.artists.map(artist => ({
      name: artist?.name,
      id: artist?.id,
      href: artist?.href,
    })),
    album: {
      name: data?.album?.name,
      id: data?.album?.id,
      href: data?.album?.href,
    },
    soundType: data?.type
  }

  res.status(200).json(track)
}