import getLikedTracks from "../../lib/spotify/getLikedTracks"

export default async function handler(req, res) {

  const response = await getLikedTracks()
  const data = await response.json()

  const likedTracks = data.items.map(item => ({
    name: item.track?.name,
    artist: item.track?.artists.map(track => track.name),
    album: item.track?.album?.name,
    image: item.track?.album?.images?.[0]?.url,
    explicit: item.track?.explicit,
    addedDate: item?.added_at,
    duration: item.track?.duration_ms,
    id: item.track?.id,
  }))

  res.status(200).json(likedTracks)
}