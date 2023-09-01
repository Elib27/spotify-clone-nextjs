import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useDeleteLikedTracks() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => fetch(`/api/deleteLikedTracks?ids=${id}`),
    onSuccess: (_, id) => {
      queryClient.setQueryData(['likedTracks'], (tracks) => tracks?.filter(track => track.id !== id))
    }
  })
}
