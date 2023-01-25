import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentMusicId, changeMusicIndexInQueue, changeTracksQueue, togglePlaying } from '../../store/store'
import Image from 'next/image'
import FilledHeartLogo from '../../public/tracks_logos/heart.svg'
import EmptyHeartLogo from '../../public/tracks_logos/empty_heart.svg'
import OptionsLogo from '../../public/tracks_logos/options_logo.svg'
import SmallPlayLogo from '../../public/tracks_logos/play_logo_small.svg'
import SmallPauseLogo from '../../public/tracks_logos/pause_logo_small.svg'

const OptionsContainer = styled.button`
  height: 16px;
  width: 16px;
  background-color: transparent;
  border: none;
  color: #fff;
  opacity: 0;
  pointer-events: none;
`
const Number = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #b3b3b3;
  ${({isPlaying}) => isPlaying && `
    color: #1ed760 !important;
  `}
`
const PlayButtonContainer = styled.button`
  height: 16px;
  width: 16px;
  background-color: transparent;
  border: none;
  color: #fff;
  display: none;
`
const TrackArtist = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: #a7a7a7;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`
const LikeContainer = styled.div`
  height: 16px;
  width: 16px;
  ${({isLiked}) => isLiked ? `
    color: #1ed760;
    opacity: 1 !important;
  ` : `
    color: #ffffff;
    opacity: 0;
    &:hover {
      opacity: 1 !important;
    }
  `}
  margin-right: 16px;
`
const Container = styled.div`
  height: 56px;
  width: 100%;
  padding: 0 16px;
  display: grid;
  ${({suppColumn}) => suppColumn ? `
    grid-template-columns: 16px 6fr 4fr 3fr minmax(120px, 1fr);
  ` : `
    grid-template-columns: 16px 4fr 2fr minmax(120px,1fr);
  `}
  grid-gap: 16px;
  border-bottom: 1px solid transparent;
  border-radius: 4px;
  position: relative;
  color: #b3b3b3;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
    ${OptionsContainer} {
      opacity: 1;
      pointer-events: auto;
    }
    ${Number} {
      display: none;
    }
    ${PlayButtonContainer} {
      display: block;
    }
    ${TrackArtist} {
      color: #fff;
    }
    ${LikeContainer} {
      opacity: 0.7;
    }
  }
`
const NumberRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 0;
`
const TracksCover = styled.div`
  height: 100%;
  margin-right: 16px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`
const TracksInformations = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 8px;
  line-height: 1.6;
  overflow: hidden;
`
const TrackTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${({isPlaying}) => isPlaying && `
    color: #1ed760 !important;
  `}
`
const TrackInformationsBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const ExplicitLogo = styled.span`
  color: #121212;
  font-size: 9px;
  background-color: hsla(0, 0%, 100%, 0.6);
  border-radius: 2px;
  padding: 3px 5px;
  line-height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`
const TrackAlbumRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
`
const AddedDateRow = styled.div`
  display: flex;
  align-items: center;
`
const AddedDate = styled.div`
  font-size: 0.875rem;
  color: #a7a7a7;
  font-weight: 400;
`
const TrackAlbum = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`
const LastRow = styled.div`
  display: flex;
  align-items: center;
`
const DurationRow = styled.div`
  margin-right: 16px;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const DurationContainer = styled.div`
  font-size: 0.875rem;
  color: #a7a7a7;
  text-align: center;
`

export default function TrackItem({
  title,
  artist,
  album,
  id,
  cover_url,
  explicit,
  duration,
  number,
  addedDate,
  isLiked,
  deleteLikedTrack,
  addLikedTrack,
  isTracksCollection
}) {

  const music = useSelector(state => state.music)
  const dispatch = useDispatch()

  async function handleClickChangeCurrentMusicId() {
    if (id === music.currentTrack.id) {
      dispatch(togglePlaying())
    }
    else {
      dispatch(changeCurrentMusicId(id))
      if (isTracksCollection){
        const response = await fetch(`/api/getLikedTracks`)
        const data = await response.json()
        const tracksQueueIds = data.map(track => track.id)
        const currIndexInQueue = tracksQueueIds.indexOf(id)
        dispatch(changeTracksQueue(tracksQueueIds))
        dispatch(changeMusicIndexInQueue(currIndexInQueue))
      }
      else {
        const response = await fetch(`/api/getTracksQueue?seed_tracks=${id}`)
        const tracksQueueIds = await response.json()
        dispatch(changeTracksQueue(tracksQueueIds))
        dispatch(changeMusicIndexInQueue(0))
      }
    }
  }

  async function toggleLikedTrack(id, isLiked) {
    if (isLiked)
      deleteLikedTrack(id)
    else
      addLikedTrack(id)
  }

  const isCurrentTrackPlaying = (id === music.currentTrack.id) && music.isPlaying

  return (
    <Container suppColumn={addedDate}>
      <NumberRow>
      {
        isCurrentTrackPlaying ? (
          <Image
            src="/tracks_logos/equaliser_animated.gif"
            alt='music playing sound levels animation'
            height={14}
            width={14}
            />
        ) : (
          <Number isPlaying={id === music.currentTrack.id}>{number}</Number>
        )
      }
        <PlayButtonContainer onClick={handleClickChangeCurrentMusicId}>
          {isCurrentTrackPlaying ? <SmallPauseLogo /> : <SmallPlayLogo />}
        </PlayButtonContainer>
      </NumberRow>
      <TitleRow>
        <TracksCover>
          <Image src={cover_url} width={40} height={40} alt="album cover"/>
        </TracksCover>
        <TracksInformations>
          <TrackTitle
            isPlaying={id === music.currentTrack.id}
          >
            {title}
          </TrackTitle>
          <TrackInformationsBottom>
            {explicit && <ExplicitLogo>E</ExplicitLogo>}
            <TrackArtist>{artist}</TrackArtist>
          </TrackInformationsBottom>
        </TracksInformations>
      </TitleRow>
      <TrackAlbumRow>
        <TrackAlbum>{album}</TrackAlbum>
      </TrackAlbumRow>
      {addedDate && (
        <AddedDateRow>
          <AddedDate>{addedDate}</AddedDate>
        </AddedDateRow>
      )}
      <LastRow>
        <LikeContainer
          isLiked={isLiked}
          onClick={() => toggleLikedTrack(id, isLiked)}
        >
          { isLiked ? <FilledHeartLogo /> : <EmptyHeartLogo />}
        </LikeContainer>
        <DurationRow>
          <DurationContainer>
            {duration}
          </DurationContainer>
        </DurationRow>
        <OptionsContainer>
          <OptionsLogo />
        </OptionsContainer>
      </LastRow>
    </Container>
  )
}
