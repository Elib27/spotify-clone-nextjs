import { useState, useEffect, useRef } from "react"
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

export default function SoundBar({ volume, setVolume, muted, setMuted }) {
  const [barCircleActive, setBarCircleActive] = useState(false)
  const soundBarContainer = useRef(null)

  function updateProgressionBar(e) {
    const barWidth = soundBarContainer.current.offsetWidth;
    const barOffset = soundBarContainer.current.getBoundingClientRect().left;
    let newProgressionPercentage = (e.clientX - barOffset) / barWidth * 100;
    if (newProgressionPercentage < 0) {
      newProgressionPercentage = 0;
    }
    else if (newProgressionPercentage > 100) {
      newProgressionPercentage = 100;
    }

    soundBarContainer.current.style.setProperty("--sound-progression-bar-fill", newProgressionPercentage + '%')

    if (newProgressionPercentage === 0 && volume !== 'muted') {
      setMuted(true)
    }
    else if ((newProgressionPercentage > 0 && newProgressionPercentage <= 30) && volume !== 'low') {
      setVolume('low')
      setMuted(false)
    }
    else if ((newProgressionPercentage > 30 && newProgressionPercentage <= 70) && volume !== 'medium') {
      setVolume('medium')
      setMuted(false)
    }
    else if (newProgressionPercentage > 70 && volume !== 'high') {
      setVolume('high')
      setMuted(false)
    }
  }

  function handleMouseMoveSound(e) {
    updateProgressionBar(e)
  }

  function handleMouseDownSound(e) {
    setBarCircleActive(true)
    updateProgressionBar(e)
    document.addEventListener("mousemove", handleMouseMoveSound)
  }

  function handleMouseUpSound(e) {
    document.removeEventListener("mousemove", handleMouseMoveSound)
    setBarCircleActive(false)
  }

  useEffect(() => {
    soundBarContainer.current.addEventListener('mousedown', handleMouseDownSound)
    document.addEventListener('mouseup', handleMouseUpSound)
    return () => {
      soundBarContainer.current.removeEventListener('mousedown', handleMouseDownSound)
      document.removeEventListener('mouseup', handleMouseUpSound)
    }
  }, [])

  useEffect(() => {
    if (muted) {
      soundBarContainer.current.style.setProperty("--sound-progression-bar-fill", '0%')
    }
  }, [muted])

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

// voir fonctionnement slider
// corriger bug changement d'icone en fonction du volume