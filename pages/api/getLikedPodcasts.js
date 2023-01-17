import getLikedPodcasts from "../../lib/spotify/getLikedPodcasts"

export default async function handler(req, res) {

  const response = await getLikedPodcasts()
  const data = await response.json()

  const likedPodcasts= data.items.map(item => ({
    name: item.show?.name,
    artist: item.show?.publisher,
    image: item.show?.images?.[1]?.url ?? item.album?.images?.[0]?.url,
    id: item.show?.id,
  }))

  res.status(200).json(likedPodcasts)
}