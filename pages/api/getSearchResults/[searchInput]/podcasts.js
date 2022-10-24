import getSearchPodcasts from '../../../../lib/spotify/getSearchPodcasts'

export default async function handle(req, res) {
  const { searchInput, offset } = req.query

  const response = await getSearchPodcasts(searchInput, offset)
  const data = await response.json()

  const podcastResults = data?.shows?.items.map((item) => ({
    name: item?.name,
    publisher: item?.publisher,
    cover_url: item?.images?.[1]?.url ?? item?.images?.[0]?.url,
    id: item?.id
  }))

  const podcastOffset = data?.shows?.offset + 1 ?? 0

  res.status(200).json({podcastResults, podcastOffset})
}