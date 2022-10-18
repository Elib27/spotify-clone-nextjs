import getSearchTracks from '../../../../lib/spotify/getSearchTracks'

export default async function handle(req, res) {
  const { searchInput, offset } = req.query

  const response = await getSearchTracks(searchInput, offset)
  const data = await response.json()

  function convertMsInMinSecs(timeToConvertInMs) {
    const min = Math.floor(timeToConvertInMs / (60 * 1000)).toString().padStart(1, '0')
    const sec = Math.floor((timeToConvertInMs % (60 * 1000)) / 1000).toString().padStart(2, '0')
    return `${min}:${sec}`
  }

  const trackResults = data?.tracks?.items.map((item) => ({
    name: item.name,
    artist: item.artists?.[0]?.name,
    duration: convertMsInMinSecs(item.duration_ms),
    album: item.album.name,
    cover_url: item.album?.images?.[1]?.url,
    explicit: item.explicit,
    id: item.id
  }))

  const trackOffset = data?.tracks?.offset + 1 ?? 0

  res.status(200).json({trackResults, trackOffset})
}