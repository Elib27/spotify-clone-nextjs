import { useQuery } from '@tanstack/react-query'

async function getSavedEpisodes(limit) {
  const response = await fetch(`/api/getSavedEpisodes?limit=${limit}`)
  const data = await response.json()
  return data
}

export default function useSavedEpisodes(limit = 50) {
  return useQuery({
    queryKey: ['likedAlbums', limit],
    queryFn: () => getSavedEpisodes(limit)
  })
}