import { useQuery } from '@tanstack/react-query'

async function getRecentlyPlayed(limit) {
  const response = await fetch(`/api/getRecentlyPlayed?limit=${limit}`)
  const data = await response.json()
  return data
}

export default function useRecentlyPlayedTracks(limit = 10) {
  return useQuery({
    queryKey: ['recentlyPlayedTracks', limit],
    queryFn: () => getRecentlyPlayed(limit)
  })
}
