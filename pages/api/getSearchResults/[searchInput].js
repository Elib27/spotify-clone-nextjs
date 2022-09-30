import getSearchResults from "../../../lib/spotify/getSearchResults"

export default async function handle(req, res) {
  const { searchInput } = req.query

  const response = await getSearchResults(searchInput)
  const data = await response.json()

  const tracks = data.tracks.items.map((item) => ({
      title: item.name,
      artist: item.artists[0].name,
      duration: item.duration_ms,
      cover_url: item.album.images[1].url
  }))

  const searchResults = {
    artist: data.artists.items[0].name,
    image: data.artists.items[0].images[2].url,
    tracks: tracks
  }

  res.status(200).json([searchResults, data])
}