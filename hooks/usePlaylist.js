import { useQuery } from '@tanstack/react-query'

async function getPlaylist(id) {
  const response = await fetch(`/api/getPlaylist?playlist_id=${id}`)
  const data = await response.json()
  return data
}

export default function usePlaylist(id) {
  return useQuery({
    queryKey: ['playlist', id],
    queryFn: () => getPlaylist(id),
    enabled: !!id && id !== 'tracks',
  })
}