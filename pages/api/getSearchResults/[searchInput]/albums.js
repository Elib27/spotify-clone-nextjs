import getSearchAlbums from '../../../../lib/spotify/getSearchAlbums'

export default async function handle(req, res) {
  const { searchInput, offset } = req.query

  const response = await getSearchAlbums(searchInput, offset)
  const data = await response.json()

  const albumResults = data?.albums?.items.map((item) => ({
    name: item.name,
    artists: item.artists.map((artist) => artist.name),
    releaseDate: item.release_date,
    cover_url: item?.images?.[1]?.url,
    id: item.id
  }))

  const albumOffset = data?.albums?.offset + 1 ?? 0

  res.status(200).json({albumResults, albumOffset})
}