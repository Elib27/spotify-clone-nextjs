import { useQuery } from '@tanstack/react-query'

async function getCopyrightFreeTrack(id) {
  const response = await fetch(`/api/getCopyrightFreeTrack/${id}`)
  const data = await response.json()
  return data
}

export default function useCopyrightFreeTrack(id) {
  return useQuery({
    queryKey: ['copyrightFreeTrack', id],
    queryFn: () => getCopyrightFreeTrack(id),
    staleTime: 1000 * 60 * 10
  })
}
