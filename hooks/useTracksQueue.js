import { useQuery } from "@tanstack/react-query";

async function getTracksQueue(id) {
  const response = await fetch(`/api/getTracksQueue?seed_tracks=${id}`)
  const data = await response.json()
  return data
}

export default function useTracksQueue(id) {
  return useQuery({
    queryKey: ['tracksQueue', id],
    queryFn: () => getTracksQueue(id),
    initialData: [],
    enabled: false
  })
}