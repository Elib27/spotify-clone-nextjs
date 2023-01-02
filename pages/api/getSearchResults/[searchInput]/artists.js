import getSearchArtists from '../../../../lib/spotify/getSearchArtists'

export default async function handle(req, res) {
  const { searchInput } = req.query

  const response = await getSearchArtists(searchInput, 0)
  const data = await response.json()

  const artistResults = data?.artists?.items.map((item) => ({
    name: item?.name,
    cover_url: item?.images?.[1]?.url,
    id: item?.id
  }))

  res.status(200).json(artistResults)
}