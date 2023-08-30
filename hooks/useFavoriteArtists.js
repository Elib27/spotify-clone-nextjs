import { useQuery } from '@tanstack/react-query'

async function getFavoriteArtists(limit) {
  const response = await fetch(`/api/getTopArtists?limit=${limit}`)
  const data = await response.json()
  return data
}

export default function useFavoriteArtists(limit = 10) {
  return useQuery({
    queryKey: ['favoriteArtists', limit],
    queryFn: () => getFavoriteArtists(limit)
  })
}
