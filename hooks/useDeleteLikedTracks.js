import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useDeleteLikedTracks() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => fetch(`/api/deleteLikedTracks?ids=${id}`),
    onMutate: async (id) => {
      await queryClient.cancelQueries(['likedTracks'])
      const previousLikedTracks = queryClient.getQueryData(['likedTracks'])
      queryClient.setQueryData(['likedTracks'], (tracks) => tracks?.filter(track => track.id !== id))
      return { previousLikedTracks }
    },
    onError: (_err, _id, { previousLikedTracks }) => {
      queryClient.setQueryData(['likedTracks'], previousLikedTracks)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['likedTracks'] })
    }
  })
}
