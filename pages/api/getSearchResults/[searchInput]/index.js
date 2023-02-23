import getSearchResults from "../../../../lib/spotify/getSearchResults"
import levenshteinDistance from "../../../../lib/levenshteinDistance"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"

export default async function handle(req, res) {

  const { searchInput } = req.query
  const { accessToken } = await getServerSession(req, res, authOptions)

  const response = await getSearchResults(accessToken, searchInput)
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

  function convertMsToMinutes(timeInMs){
    return Math.ceil(timeInMs / (1000 * 60))
  }

  function convertPodcastDate(dateInNumbers){

    const monthNames = ['Janv.', 'Févr.', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.']
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const release_date = new Date(dateInNumbers)
    const day = release_date.getDate()
    const month = monthNames[release_date.getMonth() - 1]
    const year = release_date.getFullYear()

    return `${day} ${month}${year !== currentYear ? ' ' + year : ''}`
  }

  const categories = Object.keys(data)
  const frenchCategories = ['album', 'artiste', 'titre', 'playlist', 'podcast', 'podcast']
  const closerCategoryIndex = getCloserWordIndex(searchInput, categories.map((category) => data[category]?.items[0]?.name))
  const closerCategory = categories[closerCategoryIndex]
  const frenchCategory = frenchCategories[closerCategoryIndex]

  const bestResult = {
    title: data[closerCategory]?.items[0]?.name,
    category: frenchCategory,
    image: closerCategory === 'tracks' ? data[closerCategory]?.items[0]?.album?.images?.[1]?.url : data[closerCategory]?.items[0]?.images?.[1]?.url,
    artist: data[closerCategory]?.items[0]?.artist,
    link: data[closerCategory]?.items[0]?.external_urls.spotify
  }
  
  const tracks = data.tracks.items.map((item) => ({
      title: item.name,
      artist: item.artists?.[0]?.name,
      duration: item.duration_ms,
      cover_url: item.album?.images?.[1]?.url,
      explicit: item?.explicit,
      id: item?.id
  }))
  const artists = data.artists.items.map((item) => ({
    name: item?.name,
    id: item?.id,
    image: item?.images?.[1]?.url
  }))
  const albums = data.albums.items.map((item) => ({
    name: item?.name,
    id: item?.id,
    description: `${item?.release_date.split('-')?.[0]} • ${item?.artists?.[0]?.name}`,
    image: item?.images?.[1]?.url
  }))
  const playlists = data.playlists.items.map((item) => ({
    image: item?.images?.[0]?.url,
    name: item?.name,
    author: item?.owner?.display_name,
    id: item?.id
  }))
  const podcasts = data.shows.items.map((item) => ({
    image: item?.images?.[0]?.url,
    name: item?.name,
    author: item?.publisher,
    id: item?.id
  }))
  const episodes = data.episodes.items.map((item) => ({
    image: item?.images?.[0]?.url,
    name: item?.name,
    publicationDate: convertPodcastDate(item.release_date),
    duration: convertMsToMinutes(item.duration_ms),
    id: item?.id
  }))

  const searchResults = {
    bestResult,
    albums,
    artists,
    playlists,
    podcasts,
    episodes,
    tracks
  }

  res.status(200).json([searchResults, data])
}