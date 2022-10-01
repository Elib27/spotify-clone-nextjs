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
      if (word) {
        const levenshteinDistanceScore = levenshteinDistance(reference, word)
        if (index === 0 || levenshteinDistanceScore < bestResultScore) {
          bestResultIndex = index
          bestResultScore = levenshteinDistanceScore
        }
      }
    })
    return bestResultIndex
  }

  const categories = Object.keys(data)
  const frenchCategories = ['album', 'artiste', 'titre', 'playlist', 'podcast', 'podcast']
  const closerCategoryIndex = getCloserWordIndex(searchInput, categories.map((category) => data[category]?.items[0]?.name))
  const closerCategory = categories[closerCategoryIndex]
  const frenchCategory = frenchCategories[closerCategoryIndex]

  const tracks = data.tracks.items.map((item) => ({
      title: item.name,
      artist: item.artists?.[0].name,
      duration: item.duration_ms,
      cover_url: item.album?.images?.[1].url,
      explicit: item.explicit,
      id: item.id
  }))
  const artists = data.artists.items.map((item) => ({
    name: item?.name,
    id: item?.id,
    image: item?.images?.[1].url
  }))
  const albums = data.albums.items.map((item) => ({
    name: item?.name,
    id: item?.id,
    description: `${item?.release_date.split('-')?.[0]} • ${item?.artists?.[0].name}`,
    image: item?.images?.[1].url
  }))

  const searchResults = {
    bestResult: {
      title: data[closerCategory]?.items[0]?.name,
      category: frenchCategory,
      image: closerCategory === 'tracks' ? data[closerCategory]?.items[0]?.album?.images?.[1]?.url : data[closerCategory]?.items[0]?.images?.[1]?.url,
      artist: data[closerCategory]?.items[0]?.artist,
      link: data[closerCategory]?.items[0]?.external_urls.spotify
    },
    albums,
    artists,
    tracks
  }

  res.status(200).json([searchResults, data])
}