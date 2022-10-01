import getSearchResults from "../../../lib/spotify/getSearchResults"
import levenshteinDistance from "../../../lib/levenshteinDistance"

export default async function handle(req, res) {
  const { searchInput } = req.query

  const response = await getSearchResults(searchInput)
  const data = await response.json()

  function getCloserWordIndex(reference, wordsArray) {
    let bestResultIndex = 0;
    let bestResultScore;
    wordsArray.forEach((word, index) => {
      const levenshteinDistanceScore = levenshteinDistance(reference, word)
      if (!bestResultScore || levenshteinDistanceScore < bestResultScore) {
        bestResultIndex = index
        bestResultScore = levenshteinDistanceScore
      }
    })
    return bestResultIndex
  }

  const categories = Object.keys(data)
  const closerCategoryIndex = getCloserWordIndex(searchInput, categories.map((category) => data[category].items[0].name))
  const closerCategory = categories[closerCategoryIndex]

  const tracks = data.tracks.items.map((item) => ({
      title: item.name,
      artist: item.artists[0].name,
      duration: item.duration_ms,
      cover_url: item.album?.images[2].url || item.album?.images[1].url,
      explicit: item.explicit,
      id: item.id
  }))

  const searchResults = {
    artist: data.artists.items[0].name,
    image: data.artists.items[0].images[1].url,
    tracks: tracks,
    bestResult: {
      title: data[closerCategory].items[0].name,
      category: closerCategory,
      image: data[closerCategory].items[0]?.images[2].url || data[closerCategory].items[0]?.images[1].url,
      artist: data[closerCategory].items[0]?.artist
    }
  }

  res.status(200).json([searchResults, data])
}