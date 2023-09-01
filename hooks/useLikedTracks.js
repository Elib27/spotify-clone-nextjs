import { useQuery } from '@tanstack/react-query'

async function getLikedTracks(limit) {
  const response = await fetch(`/api/getLikedTracks?limit=${limit}`)
  const data = await response.json()
  return data
}

export default function useLikedTracks() {
  return useQuery({
    queryKey: ['likedTracks'],
    queryFn: () => getLikedTracks(50)
  })
}
