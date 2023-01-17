import getFollowedArtists from "../../lib/spotify/getFollowedArtists"

export default async function handler(req, res) {

  const response = await getFollowedArtists()
  const data = await response.json()

  const followedArtists = data.artists.items.map(item => ({
    name: item?.name,
    image: item?.images?.[1]?.url ?? item?.images?.[0]?.url,
    id: item?.id,
  }))

  res.status(200).json(followedArtists)
}