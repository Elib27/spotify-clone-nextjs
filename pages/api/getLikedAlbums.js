import getLikedAlbums from "../../lib/spotify/getLikedAlbums"

export default async function handler(req, res) {

  const response = await getLikedAlbums()
  const data = await response.json()

  const likedAlbums= data.items.map(item => ({
    name: item.album?.name,
    artist: item.album?.artists.map(artist => artist.name),
    image: item.album?.images?.[1]?.url ?? item.album?.images?.[0]?.url,
    id: item.album?.id,
  }))

  res.status(200).json(likedAlbums)
}