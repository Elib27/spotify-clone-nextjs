import getPlaylist from "../../lib/spotify/getPlaylist"

export default async function handler(req, res) {

  const { playlist_id } = req.query

  const response = await getPlaylist(playlist_id)
  const data = await response.json()

  const tracks = data.tracks.items.map(item => ({
    name: item?.name,
    image: item?.track?.images?.[2]?.url || item?.track?.images?.[1]?.url,
    album: item?.track?.album?.name,
    id: item?.id,
  }))

  const playlist = {
    name: data?.name,
    description: data?.description,
    image: data?.images?.[0]?.url,
    likes: 0,
    owner: data?.owner?.display_name,
    tracks: tracks,
    id: data?.id,
  }

  res.status(200).json(playlist)
}