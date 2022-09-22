import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  togglePlaying,
  playMusic,
  togglePlayingRandom,
  changeLoopMode,
  changeTime,
  updateTimeInMinSecs,
  changeDuration,
  updateDurationInMinSecs
} from '../../store/store'
import styled from "styled-components"
import RandomMusicLogo from '../../public/musicBar_logos/random_music.svg'
import PrevMusicLogo from '../../public/musicBar_logos/prev_music.svg'
import NextMusicLogo from '../../public/musicBar_logos/next_music.svg'
import PlayMusicLogo from '../../public/musicBar_logos/play_music.svg'
import PauseMusicLogo from '../../public/musicBar_logos/pause_music.svg'
import LoopMusic1Logo from '../../public/musicBar_logos/loop_music1.svg'
import LoopMusic2Logo from '../../public/musicBar_logos/loop_music2.svg'
import Next15secLogo from '../../public/musicBar_logos/next15s.svg'
import Prev15secLogo from '../../public/musicBar_logos/prev15s.svg'

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
  outline: none;
  background-color: transparent;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
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
    z-index: 10;
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
  line-height: 1.6;
  &:first-of-type {
    text-align: right;
  }
`

export default function MusicControls() {

  const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
  const [maxMusicIndex, setMaxMusicIndex] = useState(0)
  const [currentMusicLink, setCurrentMusicLink] = useState(null)
  const [isProgressionBarMoving, setIsProgressionBarMoving] = useState(false)

  const music = useSelector( state => state.music)
  const dispatch = useDispatch()

  const audio = useRef(null)

  async function getCopyrightFreeTrack(index) {
    const response = await fetch(`/api/getCopyrightFreeTrack/${index}`)
    const track = await response.json()
    return track
  }

  function updateMusicDuration() {
    if (audio.current) {
      audio.current.addEventListener('loadedmetadata', () => {
        dispatch(changeDuration(Math.floor(audio.current.duration)))
      }, {once: true})
    }
  }

  useEffect(() => {
    dispatch(updateDurationInMinSecs())
  }, [music.duration])

  function updateCurrentTime() {
    if (audio.current && !isProgressionBarMoving) {
      if (music.time !== Math.floor(audio.current.currentTime)) {
        dispatch(changeTime(Math.floor(audio.current.currentTime)))
      }
    }
  }

  useEffect(() => {
    dispatch(updateTimeInMinSecs())
    if (music.time === music.duration) {
      handleClickNextMusic()
    }
  }, [music.time])

  useEffect(() => {
    async function firstMusicLoad(){
      const { url, maxIndex } = await getCopyrightFreeTrack(currentMusicIndex)
      setCurrentMusicLink(url)
      setMaxMusicIndex(maxIndex)
      updateMusicDuration()
      updateCurrentTime()
    }
    firstMusicLoad()
  }, [])

  useEffect(() => {
    if (audio.current) {
      music.isPlaying ? audio.current.play() : audio.current.pause()
    }
  },[music.isPlaying])

  function resetMusic(){
    audio.current.currentTime = 0
    dispatch(changeTime(0))
    updateMusicDuration()
    dispatch(playMusic())
  }

  function handleClickPrevMusic() {
    if (currentMusicIndex > 0 && music.time <= 3) {
      setCurrentMusicIndex(curr => curr - 1)
    }
    else {
      resetMusic()
    }
  }

  function handleClickNextMusic() {
    if (music.isPlayingRandom || currentMusicIndex >= maxMusicIndex) {
      const randomIndex = Math.floor(Math.random() * (maxMusicIndex - 1))
      setCurrentMusicIndex(randomIndex)
    }
    else {
      setCurrentMusicIndex(curr => curr + 1)
    }
  }

  useEffect(() => {
    async function changeMusic() {
      const { url, maxIndex } = await getCopyrightFreeTrack(currentMusicIndex)
      setCurrentMusicLink(url)
      setMaxMusicIndex(maxIndex)
    }
    changeMusic()
  }, [currentMusicIndex])

  useEffect(() => {
    resetMusic()
    audio.current.play()
  }, [currentMusicLink])

  useEffect(() => {
    if(audio.current) {
      audio.current.volume = (music.volume / 100) ** 3
    }
  }, [music.volume])

  useEffect(() => {
    if(audio.current && !isProgressionBarMoving) {
      audio.current.currentTime = music.time
    }
  }, [isProgressionBarMoving])

  function getLoopModeDataHover() {
    switch(music.loopMode) {
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
        { music.soundType === 'music' ? 
            (
              <RandomButton
                isPlayingRandom={music.isPlayingRandom}
                onClick={() => dispatch(togglePlayingRandom())}
                data-hover={`${ music.isPlayingRandom ? 'Désactiver' : 'Activer'} la lecture aléatoire`}
              >
                <RandomMusicLogo />
              </RandomButton>
            ) : (
              <ControlButton>
                <Prev15secLogo />
              </ControlButton>
            )
        }
          <ControlButton
            onClick={handleClickPrevMusic}
            data-hover="Précédent"
          >
            <PrevMusicLogo />
          </ControlButton>
        </SideContainer>
        <PlayButton 
          onClick={() => dispatch(togglePlaying())}
          data-hover={music.isPlaying ? "Pause" : "Lecture"}
        >
          {music.isPlaying ? <PauseMusicLogo /> : <PlayMusicLogo />}
        </PlayButton>
        <SideContainer>
          <ControlButton
            onClick={handleClickNextMusic}
            data-hover="Suivant"
          >
            <NextMusicLogo />
          </ControlButton>
          { music.soundType === 'music' ? 
            (
              <LoopButton
                onClick={() => dispatch(changeLoopMode())}
                loopMode={music.loopMode}
                data-hover={getLoopModeDataHover()}
              >
                {music.loopMode === 'loop_2' ? <LoopMusic2Logo /> : <LoopMusic1Logo /> }
              </LoopButton>
            ) : (
              <ControlButton>
                  <Next15secLogo />
              </ControlButton>
            )
          }
        </SideContainer>
      </ControlsContainer>
      <audio ref={audio} src={currentMusicLink} onTimeUpdate={updateCurrentTime}></audio>
      <MusicProgressionBarContainer>
        <TimerContainer>{music.timeInMinSecs}</TimerContainer>
        <MusicProgressionBar
          isProgressionBarMoving={isProgressionBarMoving}
          setIsProgressionBarMoving={setIsProgressionBarMoving}
        />
        <TimerContainer>{music.durationInMinSecs}</TimerContainer>
      </MusicProgressionBarContainer>
    </MusicControlsContainer>
  )
}