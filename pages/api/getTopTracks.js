import getTopTracks from "../../lib/spotify/getTopTracks"

export default async function handler(req, res) {

  const data = await getTopTracks()
  // const top_tracks = data

  res.status(200).json({ data })

}
