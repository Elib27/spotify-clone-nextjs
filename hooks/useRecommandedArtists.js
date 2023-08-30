import { useQuery } from '@tanstack/react-query'
import deduplicateDataById from '@/lib/deduplicateDataById'

async function getRelatedArtistsFromId(id) {
  const response = await fetch(`/api/getRelatedArtists?artist_id=${id}`)
  const data = await response.json()
  return data
}

async function getFavoriteArtists(limit) {
  const response = await fetch(`/api/getTopArtists?limit=${limit}`)
  const data = await response.json()
  return data
}

async function getRecommandedArtists(limit) {
  const favoriteArtists = await getFavoriteArtists(10)
  if (!favoriteArtists) return
  const data = await Promise.all(favoriteArtists.slice(0, 4).map(({ id }) => getRelatedArtistsFromId(id)))
  const artists = data.map(arr => arr.slice(0, 4)).flat()
  const deduplicatedArtists = deduplicateDataById(artists).slice(0, limit)
  return deduplicatedArtists
}

export default function useRecommandedArtists(limit = 10) {
  return useQuery({
    queryKey: ['recommandedArtists', limit],
    queryFn: () => getRecommandedArtists(limit)
  })
}