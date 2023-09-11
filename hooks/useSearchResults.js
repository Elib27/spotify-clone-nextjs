import { useQuery } from "@tanstack/react-query";

async function getSearchResults(type, query) {
  const apiEndpoint = type === 'all' ? query : `${query}/${type}`
  const response = await fetch(`/api/getSearchResults/${apiEndpoint}`)
  const data = await response.json()
  return data
}

export default function useSearchResults(type, query) {
  return useQuery({
    queryKey: ['searchResults', type, query],
    queryFn: () => getSearchResults(type, query)
  })
}