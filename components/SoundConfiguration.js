import { useState } from "react"
import styled from "styled-components"
import Microphone from '../public/musicBar_logos/microphone.svg'
import WaitList from '../public/musicBar_logos/wait_list.svg'
import Speaker from '../public/musicBar_logos/speaker.svg'
import MutedVolume from '../public/musicBar_logos/muted_volume.svg'
import LowVolume from '../public/musicBar_logos/low_volume.svg'
import MediumVolume from '../public/musicBar_logos/medium_volume.svg'
import HighVolume from '../public/musicBar_logos/high_volume.svg'
import SoundBar from "./SoundBar"

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
  `
const MicroButton = styled(Button)`
  ${({ isLyricsPannelOpen }) => isLyricsPannelOpen && `
    color: #1db954;
    opacity: 1;
    &::after {
      content: "";
      background-color: #1db954;
      height: 4px;
      width: 4px;
      display: block;
      inline-size: 16px;
      border-radius: 50%;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translateX(-50%);
    }
  `}
`
const WaitListButton = styled(Button)`
  ${({ isWaitListOpen }) => isWaitListOpen && `
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
  display: flex;
  align-items: center;
  position: relative;
`

export default function SoundConfiguration() {
  const [volume, setVolume] = useState('low')
  const [volumeValue, setVolumeValue] = useState(50)
  const [storedVolumeValue, setStoredVolumeValue] = useState(30)

  const [isLyricsPannelOpen, setIsLyricsOpen] = useState(false)
  const [isWaitListOpen, setIsWaitListOpen] = useState(false)

  function handleClickToogleMute() {
    if(volume === 'muted') {
      setVolumeValue(storedVolumeValue !== 0 ? storedVolumeValue : 50)
    }
    else {
      setVolume('muted')
      setStoredVolumeValue(volumeValue)
      setVolumeValue(0)
    }
  }

  return (
    <Container>
      <MicroButton
        isLyricsPannelOpen={isLyricsPannelOpen}
        onClick={() => setIsLyricsOpen(curr => !curr)}
      >
        <Microphone />
      </MicroButton>
      <WaitListButton
        isWaitListOpen={isWaitListOpen}
        onClick={() => setIsWaitListOpen(curr => !curr)}
      >
        <WaitList />
      </WaitListButton>
      <Button>
        <Speaker />
      </Button>
      <VolumeBarContainer>
        <Button onClick={handleClickToogleMute}>
          {volume === 'muted' && <MutedVolume />}
          {volume === 'low' && <LowVolume />}
          {volume === 'medium' && <MediumVolume />}
          {volume === 'high' && <HighVolume />}
        </Button>
        <SoundBar
          volume={volume}
          setVolume={setVolume}
          volumeValue={volumeValue}
          setVolumeValue={setVolumeValue}
          storedVolumeValue={storedVolumeValue}
          setStoredVolumeValue={setStoredVolumeValue}
        />
      </VolumeBarContainer>
    </Container>
  )
}