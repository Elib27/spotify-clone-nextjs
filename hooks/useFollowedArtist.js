import { useQuery } from '@tanstack/react-query'

async function getFollowedArtists(limit) {
  const response = await fetch(`/api/getFollowedArtists?limit=${limit}`)
  const data = await response.json()
  return data
}

export default function useFollowedArtists(limit = 50) {
  return useQuery({
    queryKey: ['followedArtists', limit],
    queryFn: () => getFollowedArtists(limit)
  })
}
