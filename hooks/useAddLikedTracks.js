import { useMutation } from '@tanstack/react-query'

export default function useAddLikedTracks() {
  return useMutation({
    mutationFn: (id) => fetch(`/api/addLikedTracks?ids=${id}`)
  })
}
