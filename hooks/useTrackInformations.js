import { useQuery } from '@tanstack/react-query'

async function getTrackInformations(id) {
  const response = await fetch(`/api/getTrackInformations?id=${id}`)
  const data = await response.json()
  return data
}

export default function useTrackInformations(id) {
  return useQuery({
    queryKey: ['trackInformations', id],
    queryFn: () => getTrackInformations(id),
    enabled: !!id,
  })
}