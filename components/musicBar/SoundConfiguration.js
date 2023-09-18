import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeVolume, changePrevVolume } from "@/store/store"
import styled from "styled-components"
import Microphone from '@/public/musicBar_logos/microphone.svg'
import WaitList from '@/public/musicBar_logos/wait_list.svg'
import Speaker from '@/public/musicBar_logos/speaker.svg'
import SoundLogo from './SoundLogo'
import SoundBar from './SoundBar'

const Container = styled.div`
  width: 30%;
  flex-grow: 1;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Button = styled.button`
  height: 32px;
  width: 32px;
  background-color: transparent;
  color: #fff;
  border: none;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
    opacity: 1;
  }
  &:active {
    transform: scale(1);
    opacity: 0.7;
  }
  &:last-of-type:hover {
    transform: scale(1);
  }
  ${({ $isActive }) => $isActive && `
    color: #1db954;
    opacity: 1;
    &::after {
      content: "";
      background-color: #1db954;
      height: 4px;
      width: 4px;
      display: block;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  `}
`
const VolumeBarContainer = styled.div`
  width: 125px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  position: relative;
`

function getVolumeCategory(volume) {
  if (volume === 0) return 'muted'
  if (volume <= 30) return 'low'
  if (volume <= 65) return 'medium'
  return 'high'
}

export default function SoundConfiguration() {

  const music = useSelector(state => state.music)
  const dispatch = useDispatch()

  const [isLyricsPannelOpen, setIsLyricsOpen] = useState(false)
  const [isQueueListOpen, setIsQueueListOpen] = useState(false)

  const volumeCategory = getVolumeCategory(music.volume)

  function handleClickToogleMute() {
    if (volumeCategory === 'muted') {
      const newVolume = music.prevVolume === 0 ? 50 : music.prevVolume
      dispatch(changeVolume(newVolume))
    }
    else {
      dispatch(changePrevVolume(music.volume))
      dispatch(changeVolume(0))
    }
  }

  return (
    <Container>
      {music.currentTrack.soundType === 'track' && (
        <Button
          $isActive={isLyricsPannelOpen}
          onClick={() => setIsLyricsOpen(curr => !curr)}
          aria-label="Lyrics"
        >
          <Microphone />
        </Button>
      )}
      <Button
        $isActive={isQueueListOpen}
        onClick={() => setIsQueueListOpen(curr => !curr)}
        aria-label="Wait list"
      >
        <WaitList />
      </Button>
      <Button>
        <Speaker />
      </Button>
      <VolumeBarContainer>
        <Button onClick={handleClickToogleMute} aria-label={volumeCategory === 'muted' ? 'unmute' : "mute"}>
          <SoundLogo volumeCategory={volumeCategory} />
        </Button>
        <SoundBar />
      </VolumeBarContainer>
    </Container>
  )
}