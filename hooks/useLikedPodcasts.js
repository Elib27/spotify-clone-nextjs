import { useQuery } from '@tanstack/react-query'

async function getLikedPodcasts(limit) {
  const response = await fetch(`/api/getLikedPodcasts?limit=${limit}`)
  const data = await response.json()
  return data
}

export default function useLikedPodcasts(limit = 50) {
  return useQuery({
    queryKey: ['likedPodcasts', limit],
    queryFn: () => getLikedPodcasts(limit)
  })
}