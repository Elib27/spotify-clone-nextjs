import { useState } from "react"
import styled, { keyframes } from "styled-components"
import RandomMusicLogo from "../public/musicBar_logos/random_music.svg"
import PrevMusicLogo from '../public/musicBar_logos/prev_music.svg'
import NextMusicLogo from '../public/musicBar_logos/next_music.svg'
import PlayMusicLogo from '../public/musicBar_logos/play_music.svg'
import PauseMusicLogo from '../public/musicBar_logos/pause_music.svg'
import LoopMusic1Logo from '../public/musicBar_logos/loop_music1.svg'
import LoopMusic2Logo from '../public/musicBar_logos/loop_music2.svg'
import Next15secLogo from '../public/musicBar_logos/next15s.svg'
import Prev15secLogo from '../public/musicBar_logos/prev15s.svg'
import MusicProgressionBar from "./MusicProgressionBar"

const MusicControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 722px;
  width: 40%;
`
const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  gap: 16px;
`
const ControlButton = styled.button`
  height: 32px;
  width: 32px;
  opacity: 0.7;
  border: none;
  background-color: transparent;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.7;
  }
  &::before {
    content: attr(data-hover);
    background-color: #282828;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0 !important;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 6px 12px 0px rgb(0 0 0 / 50%);
    pointer-events: none;
    user-select: none;
    transition: none;
  }
  &:active::before {
    display: none;
  }
  &:hover::before {
    opacity: 1 !important;
    transition: opacity 0.3s ease-in-out 0.3s;
  }
`
const RandomButton = styled(ControlButton)`
  ${({ isPlayingRandom }) => isPlayingRandom && `
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
const LoopButton = styled(ControlButton)`
  ${({ loopMode }) => (loopMode !== 'no_loop') && `
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
const PlayButton = styled(ControlButton)`
  background-color: #fff;
  border-radius: 50%;
  color: #000;
  opacity: 1;
  &:hover {
    transform: scale(1.06);
  }
  &:active {
    transform: scale(1);
  }
`
const SideContainer = styled.div`
  display: flex;
  gap: 8px;
`
const MusicProgressionBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`
const TimerContainer = styled.div`
  min-width: 40px;
  font-size: 0.6875rem;
  font-weight: 400;
  color: #a7a7a7;
  text-align: left;
  user-select: none;
  &:first-of-type {
    text-align: right;
  }
`

export default function MusicControls({ soundType }) {

  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayingRandom, setIsPlayingRandom] = useState(false)
  const [loopMode, setLoopMode] = useState('no_loop')

  function tooglePlaying() {
    setIsPlaying(curr => !curr)
  }

  function changeLoopMode() {
    switch(loopMode) {
      case 'no_loop':
        setLoopMode('loop_1')
        break
      case 'loop_1':
        setLoopMode('loop_2')
        break
      case 'loop_2':
        setLoopMode('no_loop')
        break
    }
  }

  function getLoopModeDataHover() {
    switch(loopMode) {
      case 'no_loop':
        return 'Activer la répétition'
      case 'loop_1':
        return 'Autoriser la répétition'
      case 'loop_2':
        return 'Désactiver la répétition'
    }
  }

  return (
    <MusicControlsContainer>
      <ControlsContainer>
        <SideContainer>
        { soundType === 'music' ? 
            (
              <RandomButton
                isPlayingRandom={isPlayingRandom}
                onClick={() => setIsPlayingRandom(curr => !curr)}
                data-hover="Activer la lecture aléatoire"
              >
                <RandomMusicLogo />
              </RandomButton>
            ) : (
              <ControlButton>
                <Prev15secLogo />
              </ControlButton>
            )
        }
          <ControlButton data-hover="Précédent">
            <PrevMusicLogo />
          </ControlButton>
        </SideContainer>
        <PlayButton
          onClick={tooglePlaying}
          data-hover={isPlaying ? "Pause" : "Lecture"}
        >
          {isPlaying ? <PauseMusicLogo /> : <PlayMusicLogo />}
        </PlayButton>
        <SideContainer>
          <ControlButton
            data-hover="Suivant"
          >
            <NextMusicLogo />
          </ControlButton>
          { soundType === 'music' ? 
            (
              <LoopButton
                onClick={changeLoopMode}
                loopMode={loopMode}
                data-hover={getLoopModeDataHover()}
              >
                {loopMode === 'loop_2' ? <LoopMusic2Logo /> : <LoopMusic1Logo /> }
              </LoopButton>
            ) : (
              <ControlButton>
                  <Next15secLogo />
              </ControlButton>
            )
          }
        </SideContainer>
      </ControlsContainer>
      <MusicProgressionBarContainer>
        <TimerContainer>1:27</TimerContainer>
        <MusicProgressionBar />
        <TimerContainer>3:23</TimerContainer>
      </MusicProgressionBarContainer>
    </MusicControlsContainer>
  )
}
