import getRecentlyPlayed from "../../lib/spotify/getRecentlyPlayed"

export default async function handler(req, res) {

  const data = await getRecentlyPlayed()

  const recentlyPlayedTracks = data.items.map(item => ({
    name: item?.track?.name,
    artist: item?.track?.artists[0]?.name,
    album: item?.track?.album?.name,
    popularity: item?.track?.popularity
  }))

  res.status(200).json(recentlyPlayedTracks)
}