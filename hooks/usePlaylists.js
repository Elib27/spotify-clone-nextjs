import { useQuery } from '@tanstack/react-query'

async function getPlaylists(limit) {
  const response = await fetch(`/api/getPlaylists?limit=${limit}`)
  const data = await response.json()
  return data
}

export default function usePlaylists(limit = 10) {
  return useQuery({
    queryKey: ['playlists', limit],
    queryFn: () => getPlaylists(limit)
  })
}
