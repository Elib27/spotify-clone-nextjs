import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useAddLikedTracks() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => fetch(`/api/addLikedTracks?ids=${id}`),
    onMutate: async (id) => {
      await queryClient.cancelQueries(['likedTracks'])
      const previousLikedTracks = queryClient.getQueryData(['likedTracks'])
      queryClient.setQueryData(['likedTracks'], (tracks) => [...tracks, { id }])
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
