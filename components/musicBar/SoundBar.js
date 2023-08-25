import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeVolume } from "../../store/store"
import styled from "styled-components"

const SoundProgressionBarBackground = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: #5e5e5e;
  position: absolute;
  left: 0;
`
const SoundProgressionBarFill = styled(SoundProgressionBarBackground)`
  background-color: #fff;
  width: 100%;
  transform: translateX(calc(var(--sound-progression-bar-fill) - 100%));
  ${({ active }) => active && `
    background-color: #1db954;
  `}
`
const SoundBarCircle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  position: absolute;
  top: 50%;
  left: var(--sound-progression-bar-fill);
  margin-left: -6px;
  transform: translateY(-50%);
  z-index: 100;
  display: none;
  user-select: none;
  ${({ active }) => active && `
    display: block;
  `}
`
const SoundProgressionBar = styled.div`
  --sound-progression-bar-fill: 65%;
  height: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  &:hover ${SoundProgressionBarFill} {
    background-color: #1db954;
  }
  &:hover ${SoundBarCircle} {
    display: block;
  }
`
const SoundProgressionBarWrapper = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`

export default function SoundBar() {

  const music = useSelector(state => state.music)
  const dispatch = useDispatch()

  const [barCircleActive, setBarCircleActive] = useState(false)
  const soundBarContainer = useRef(null)

  function updateProgressionBar(e) {
    const barWidth = soundBarContainer.current.offsetWidth
    const barOffset = soundBarContainer.current.getBoundingClientRect().left
    let newVolume = Math.floor((e.clientX - barOffset) / barWidth * 100)

    if (newVolume < 0) {
      newVolume = 0
    }
    else if (newVolume > 100) {
      newVolume = 100
    }

    dispatch(changeVolume(newVolume))
  }

  useEffect(() => {
    soundBarContainer.current.style.setProperty("--sound-progression-bar-fill", music.volume + '%')
  }, [music.volume])

  function handleMouseMoveSound(e) {
    updateProgressionBar(e)
  }

  function handleMouseDownSound(e) {
    setBarCircleActive(true)
    updateProgressionBar(e)
    document.addEventListener("mousemove", handleMouseMoveSound)
  }

  function handleMouseUpSound() {
    document.removeEventListener("mousemove", handleMouseMoveSound)
    setBarCircleActive(false)
  }

  useEffect(() => {
    const soundBarContainerRef = soundBarContainer.current
    soundBarContainerRef.addEventListener('mousedown', handleMouseDownSound)
    document.addEventListener('mouseup', handleMouseUpSound)
    return () => {
      soundBarContainerRef.removeEventListener('mousedown', handleMouseDownSound) // PB ?
      document.removeEventListener('mouseup', handleMouseUpSound)
    }
  }, [])

  return (
    <SoundProgressionBar ref={soundBarContainer}>
      <SoundBarCircle active={barCircleActive} />
      <SoundProgressionBarWrapper>
        <SoundProgressionBarBackground />
        <SoundProgressionBarFill active={barCircleActive} />
      </SoundProgressionBarWrapper>
    </SoundProgressionBar>
  )
}