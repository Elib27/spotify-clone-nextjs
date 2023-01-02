import getSearchPlaylists from '../../../../lib/spotify/getSearchPlaylists'

export default async function handle(req, res) {
  const { searchInput } = req.query

  const response = await getSearchPlaylists(searchInput, 0)
  const data = await response.json()

  const playlistResults = data?.playlists?.items.map((item) => ({
    name: item?.name,
    owner: item?.owner?.display_name,
    cover_url: item?.images?.[1]?.url ?? item?.images?.[0]?.url,
    collaborative: item?.collaborative,
    id: item?.id
  }))

  res.status(200).json(playlistResults)
}