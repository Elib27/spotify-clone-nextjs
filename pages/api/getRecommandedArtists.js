import getRecommandedArtists from "../../lib/spotify/getRecommandedArtists"

export default async function handler(req, res) {

  const response = await getRecommandedArtists()
  const data = await response.json()

  const recommandedArtists = data.items.map(item => ({
    name: item?.name,
    image: item?.images?.[1]?.url ?? item?.images?.[0]?.url,
    id: item?.id,
  }))

  res.status(200).json(recommandedArtists)
}