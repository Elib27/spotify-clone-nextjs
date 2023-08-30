import { useQuery } from '@tanstack/react-query'

async function getNewAlbumReleases(limit) {
  const response = await fetch(`/api/getNewAlbumReleases?limit=${limit}`)
  const data = await response.json()
  return data
}

export default function useNewAlbumReleases(limit = 20) {
  return useQuery({
    queryKey: ['newAlbumReleases', limit],
    queryFn: () => getNewAlbumReleases(limit)
  })
}
