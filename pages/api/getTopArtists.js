import getTopArtists from "../../lib/spotify/getTopArtists"

export default async function handler(req, res) {

  const response = await getTopArtists()
  const data = await response.json()

  const topArtists = data.items.map(item => ({
    name: item?.name,
    image: item?.images?.[1]?.url ?? item?.images?.[0]?.url,
    id: item?.id,
  }))

  res.status(200).json(topArtists)
}