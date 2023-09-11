import { useRouter } from 'next/router'
import useLikedTracks from '@/hooks/useLikedTracks'
import useDeleteLikedTracks from '@/hooks/useDeleteLikedTracks'
import useAddLikedTracks from '@/hooks/useAddLikedTracks'
import useSearchResults from '@/hooks/useSearchResults'
import MainLayout from '@/components/shared/MainLayout'
import SearchResultLayout from '@/components/searchPage/SearchResultLayout'
import TracksContainer from '@/components/searchPage/TracksContainer'
import TrackItem from '@/components/shared/TrackItem'
import NoResults from '@/components/searchPage/NoResults'


export default function Tracks() {

  const router = useRouter()
  const { searchQuery } = router.query

  const { data: likedTracks } = useLikedTracks()
  const likedTrackIds = likedTracks?.map(track => track.id)

  const { data: tracksData } = useSearchResults('tracks', searchQuery)

  const { mutate: addLikedTrack } = useAddLikedTracks()
  const { mutate: deleteLikedTrack } = useDeleteLikedTracks()


  if (!tracksData) return (null)

  if (!tracksData?.length) {
    return (<NoResults searchValue={searchQuery} />)
  }

  return (
    <TracksContainer columnTitles={['#', 'titre', 'album']} >
      {
        tracksData.map((track, index) => (
          <TrackItem
            key={track.id}
            title={track.name}
            artist={track.artist}
            album={track.album}
            id={track.id}
            cover_url={track.cover_url}
            explicit={track.explicit}
            duration={track.duration}
            number={index + 1}
            addLikedTrack={addLikedTrack}
            deleteLikedTrack={deleteLikedTrack}
            playlistId=""
            isLiked={likedTrackIds && likedTrackIds.includes(track.id)}
            addedDate={null}
          />
        ))
      }
    </TracksContainer>
  )
}

Tracks.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <SearchResultLayout>{page}</SearchResultLayout>
    </MainLayout>
  )
}