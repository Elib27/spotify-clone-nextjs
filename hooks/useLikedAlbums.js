import { useQuery } from '@tanstack/react-query'

async function getLikedAlbums(limit) {
  const response = await fetch(`/api/getLikedAlbums?limit=${limit}`)
  const data = await response.json()
  return data
}

export default function useLikedAlbums(limit = 50) {
  return useQuery({
    queryKey: ['likedAlbums', limit],
    queryFn: () => getLikedAlbums(limit)
  })
}
