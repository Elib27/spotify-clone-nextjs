import { useQuery } from '@tanstack/react-query'

async function getLikedTracks(limit) {
  const response = await fetch(`/api/getLikedTracks?limit=${limit}`)
  const data = await response.json()
  return data
}

export default function useLikedTracks(limit = 50) {
  return useQuery({
    queryKey: ['likedTracks', limit],
    queryFn: () => getLikedTracks(limit)
  })
}
