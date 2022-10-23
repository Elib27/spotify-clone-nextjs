import getSearchArtists from '../../../../lib/spotify/getSearchArtists'

export default async function handle(req, res) {
  const { searchInput, offset } = req.query

  const response = await getSearchArtists(searchInput, offset)
  const data = await response.json()

  const artistResults = data?.artists?.items.map((item) => ({
    name: item.name,
    cover_url: item?.images?.[1]?.url,
    id: item.id
  }))

  const artistOffset = data?.artist?.offset + 1 ?? 0

  res.status(200).json({artistResults, artistOffset})
}