import getSearchTracks from '@/lib/spotify/getSearchTracks'
import deduplicateDataById from '@/lib/deduplicateDataById'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handle(req, res) {

  const { searchInput } = req.query
  const { accessToken } = await getServerSession(req, res, authOptions)

  const tracksData = await Promise.all([
    getSearchTracks(accessToken, searchInput, 0),
    getSearchTracks(accessToken, searchInput, 50)
  ])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => { return data })

  function convertMsInMinSecs(timeToConvertInMs) {
    if (!timeToConvertInMs) return null
    const min = Math.floor(timeToConvertInMs / (60 * 1000)).toString().padStart(1, '0')
    const sec = Math.floor((timeToConvertInMs % (60 * 1000)) / 1000).toString().padStart(2, '0')
    return `${min}:${sec}`
  }

  const combinedResults = [...tracksData[0].tracks.items, ...tracksData[1].tracks.items]
  const deduplicatedTrackResults = deduplicateDataById(combinedResults)

  const trackResults = deduplicatedTrackResults.map((item) => ({
    name: item?.name,
    artist: item?.artists?.[0]?.name,
    duration: convertMsInMinSecs(item?.duration_ms),
    album: item?.album?.name,
    cover_url: item?.album?.images?.[1]?.url,
    explicit: item?.explicit,
    id: item?.id
  }))

  res.status(200).json(trackResults)
}