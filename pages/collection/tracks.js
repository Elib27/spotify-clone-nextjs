import styled from 'styled-components'
import useLikedTracks from '@/hooks/useLikedTracks'
import useDeleteLikedTracks from '@/hooks/useDeleteLikedTracks'
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentMusicId, changeCurrentPlaylist, changeMusicIndexInQueue, changeTracksQueue, togglePlaying } from '@/store/store'
import PlaylistHeader from '@/components/shared/PlaylistHeader'
import PlaylistPlayButtonSection from '@/components/shared/PlaylistPlayButtonSection'
import NoLikedTracksSection from '@/components/collection/NoLikedTracksSection'
import TracksContainer from '@/components/collection/LikedTracksContainer'
import TrackItem from '@/components/shared/TrackItem'

const Container = styled.div`
  padding-bottom: 32px;
`
const MainContentWrapper = styled.div`
  position: relative;
  z-index: 0;
`
const BackgroundGradient = styled.div`
  height: 232px;
  width: 100%;
  background-color: rgb(80, 56, 160);
  background-image: linear-gradient(rgba(0,0,0,.6), #121212), url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=");
  position: absolute;
  z-index: -1;
  pointer-events: none;
`
const TracksWrapper = styled.div`
  padding: 0 32px;
`

export default function Tracks() {

  const music = useSelector(state => state.music)
  const dispatch = useDispatch()

  const { data: likedTracks } = useLikedTracks()

  const { mutate: deleteLikedTrack } = useDeleteLikedTracks()

  function tooglePlaylingLikedMusic() {
    if (!likedTracks) return
    if (music.currentPlaylist !== 'tracks') {
      dispatch(changeCurrentPlaylist('tracks'))
      dispatch(changeCurrentMusicId(likedTracks[0].id))
      dispatch(changeTracksQueue(likedTracks.map(track => track.id)))
      dispatch(changeMusicIndexInQueue(0))
    }
    dispatch(togglePlaying())
  }

  const isLikedMusicPlaying = music.currentPlaylist === 'tracks' && music.isPlaying && likedTracks

  if (!likedTracks) return

  return (
    <Container>
      <PlaylistHeader
        title="Titres likés"
        cover_url="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        background="#523b9f"
        owner="eliot"
        tracks_number={likedTracks.length}
      />
      <MainContentWrapper>
        <BackgroundGradient />
        {likedTracks.length === 0 ? (
          <NoLikedTracksSection />
        ) : (
          <>
            <PlaylistPlayButtonSection
              handleButtonClick={tooglePlaylingLikedMusic}
              isPlaying={isLikedMusicPlaying}
            />
            <TracksWrapper>
              <TracksContainer
                columnTitles={['#', 'titre', 'album', 'ajouté le']}
              >
                {likedTracks.map((track, index) => (
                  <TrackItem
                    key={track.id}
                    id={track.id}
                    title={track.name}
                    artist={track.artist}
                    album={track.album}
                    cover_url={track.image}
                    explicit={track.explicit}
                    duration={track.duration}
                    number={index + 1}
                    isLiked
                    playlistId="tracks"
                    deleteLikedTrack={deleteLikedTrack}
                    addedDate={track.addedDate}
                  />
                ))}
              </TracksContainer>
            </TracksWrapper>
          </>
        )}
      </MainContentWrapper>
    </Container>
  )
}
