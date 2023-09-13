import styled from "styled-components"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentMusic } from '@/store/store'
import Image from "next/image"
import useLikedTracks from "@/hooks/useLikedTracks"
import useDeleteLikedTracks from "@/hooks/useDeleteLikedTracks"
import useAddLikedTracks from "@/hooks/useAddLikedTracks"
import useTrackInformations from "@/hooks/useTrackInformations"
import FilledHeartLogo from '@/public/tracks_logos/heart.svg'
import EmptyHeartLogo from '@/public/tracks_logos/empty_heart.svg'
import AddToEpisodes from '@/public/musicBar_logos/add_to_episodes_logo.svg'
import IsInEpisodes from '@/public/musicBar_logos/added_to_episodes_logo.svg'

const Container = styled.div`
  width: 30%;
  flex-grow: 1;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 16px;
  box-sizing: content-box;
  position: relative;
`
const ScreenButton = styled.button`
  height: 32px;
  width: 32px;
  flex-shrink: 0;
  background-color: transparent;
  margin-top: -1px;
  color: #fff;
  border: none;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.7;
  }
`
const HeartButton = styled(ScreenButton)`
  margin-top: 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
  ${({ $isLiked }) => $isLiked && `
    color: #1db954;
    opacity: 1;
  `}
`
const AddEpisodesButton = styled(ScreenButton)`
  margin-top: 0;
  ${({ $isLiked }) => $isLiked && `
    opacity: 1;
  `}
`
const CurrentMusicCover = styled.div`
  height: 56px;
  width: 56px;
  flex-shrink: 0;
  margin-left: 16px;
  position: relative;
  cursor: pointer;
`
const MusicInformations = styled.div`
  margin: 0 14px 0 14px;
  position: relative;
  overflow: hidden;
  padding-right: 10px;
  mask-image: linear-gradient(90deg,transparent 0,#000 6px,#000 calc(100% - 12px),transparent);
`
const MusicDescription = styled.div`
  width: 100%;
  font-weight: 400;
  line-height: 1.6;
  text-align: left;
  flex-shrink: 0;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const MusicTitle = styled(MusicDescription)`
  font-size: 0.875rem;
  color: #fff;
  padding-left: 6px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const MusicArtistsContainer = styled(MusicDescription)`
  font-size: 0.6875rem;
  color: #b3b3b3;
`

const MusicArtistButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.6875rem;
  font-weight: 400;
  line-height: 1.6;
  color: #b3b3b3;
  outline: 0;
  text-align: left;
  white-space: nowrap;
  padding-left: 6px;
  cursor: pointer;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`

export default function CurrentMusicInformations() {

  const music = useSelector(state => state.music)
  const dispatch = useDispatch()


  const { data: likedTracks } = useLikedTracks()
  const { data: trackInformations } = useTrackInformations(music.currentTrack.id)

  const { mutate: deleteLikedTrack } = useDeleteLikedTracks()
  const { mutateAsync: addLikedTrack } = useAddLikedTracks()

  const likedTrackIds = likedTracks?.map(track => track.id)

  useEffect(() => {
    if (!trackInformations) return
    dispatch(changeCurrentMusic(trackInformations))
  }, [trackInformations, dispatch])

  const toggleLikedTrack = (id, isLiked) => isLiked ? deleteLikedTrack(id) : addLikedTrack(id)

  const isLiked = likedTrackIds?.includes(music.currentTrack.id)

  const artists = music.currentTrack.artists.map((artist, index) => (
    <span key={artist.id}>
      {index > 0 ? ',' : ''}
      <MusicArtistButton >
        {artist.name}
      </MusicArtistButton>
    </span>
  ))

  if (!music.currentTrack.name) {
    return (
      <Container />
    )
  }

  return (
    <Container>
      <CurrentMusicCover>
        <Image src={music.currentTrack.image} alt={`${music.currentTrack.album || music.currentTrack.name} cover`} fill />
      </CurrentMusicCover>
      <MusicInformations>
        <MusicTitle>{music.currentTrack.name}</MusicTitle>
        <MusicArtistsContainer>{artists}</MusicArtistsContainer>
      </MusicInformations>
      {music.currentTrack.soundType === 'track' ? (
        <HeartButton
          onClick={() => toggleLikedTrack(music.currentTrack.id, isLiked)}
          $isLiked={isLiked}
        >
          {isLiked ? <FilledHeartLogo /> : <EmptyHeartLogo />}
        </HeartButton>
      ) : (
        <AddEpisodesButton
          $isLiked={isLiked}
        >
          {isLiked ? <IsInEpisodes /> : <AddToEpisodes />}
        </AddEpisodesButton>
      )}
    </Container>
  )
}