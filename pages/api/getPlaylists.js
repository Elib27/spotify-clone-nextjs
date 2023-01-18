import getPlaylists from "../../lib/spotify/getPlaylists"

export default async function handler(req, res) {

  const response = await getPlaylists()
  const data = await response.json()

  const playlists = data.items.map(item => ({
    name: item?.name,
    description: item?.description || `Par ${item?.owner?.display_name}`,
    image: item.images?.[1]?.url ?? item?.images?.[0]?.url,
    id: item?.id,
  }))

  res.status(200).json(playlists)
}