import getAccessToken from "./getAccessToken"
import getTopTracks from "../../lib/spotify/getTopTracks"

export default async function handler(req, res) {

  const data = await getTopTracks()

  const top_tracks = data.map(track => ({
    name: track.name,
    artist: track.artists[0].name,
    album: track.album.name,
    popularity: track.popularity
  }))

  res.status(200).json({ top_tracks })

}
