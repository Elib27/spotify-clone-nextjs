import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useSelector, dispatch } from 'react-redux'
import { toogleLiked } from '../../store/store'
import Image from "next/image"
import Heart from '../../public/musicBar_logos/heart.svg'
import HeartFull from '../../public/musicBar_logos/heart_full.svg'
import AddToEpisodes from '../../public/musicBar_logos/add_to_episodes_logo.svg'
import IsInEpisodes from '../../public/musicBar_logos/added_to_episodes_logo.svg'
import ScreenDisplay from '../../public/musicBar_logos/screen_display.svg'

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
  ${({isLiked}) => isLiked && `
    color: #1db954;
    opacity: 1;
  `}
`
const AddEpisodesButton = styled(ScreenButton)`
  margin-top: 0;
  ${({isLiked}) => isLiked && `
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
  margin: 0 20px 0 14px;
  position: relative;
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(90deg,transparent 0,#000 6px,#000 calc(100% - 12px),transparent);
`
const MusicTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: #fff;
  width: 100%;
  text-align: left;
  line-height: 1.6;
  flex-shrink: 0;
  white-space: nowrap;
  padding-left: 6px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const MusicArtist = styled(MusicTitle)`
  font-size: 0.6875rem;
  color: #b3b3b3;
  white-space: nowrap;
  padding-left: 6px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`

export default function CurrentMusicInformations() {

  const music = useSelector(state => state.music)

  if (!music.name) {
    return (
      <Container />
    )
  }

  return (
    <Container>
      <CurrentMusicCover>
        <Image src={music.image.url} alt={`${music.album || music.name} cover`} layout="fill"/>
      </CurrentMusicCover>
      <MusicInformations>
        <MusicTitle>{music?.name}</MusicTitle>
        <MusicArtist>{music?.artists.join(', ')}</MusicArtist>
      </MusicInformations>
      {music.soundType === 'music' ? (
        <HeartButton
          isLiked={music.isLiked}
          onClick={toogleLiked}
        >
          {music.isLiked ? <HeartFull /> : <Heart />}
        </HeartButton>
      ):(
        <AddEpisodesButton isLiked={music.isLiked}>
          {music.isLiked ? <IsInEpisodes /> : <AddToEpisodes />}
        </AddEpisodesButton>
      )}
      <ScreenButton>
        <ScreenDisplay />
      </ScreenButton>
    </Container>
  )
}