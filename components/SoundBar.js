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

export default function SoundBar({ volume, setVolume, volumeValue, setVolumeValue, setStoredVolumeValue}) {
  const [barCircleActive, setBarCircleActive] = useState(false)
  const soundBarContainer = useRef(null)
  
  function updateProgressionBar(e) {
    const barWidth = soundBarContainer.current.offsetWidth
    const barOffset = soundBarContainer.current.getBoundingClientRect().left
    let newVolumeValue = (e.clientX - barOffset) / barWidth * 100

    if (newVolumeValue < 0) {
      newVolumeValue = 0
    }
    else if (newVolumeValue > 100) {
      newVolumeValue = 100
    }

    setVolumeValue(newVolumeValue)
  }

  useEffect(() => {
    console.log(volumeValue)

    soundBarContainer.current.style.setProperty("--sound-progression-bar-fill", volumeValue + '%')

    if (volumeValue === 0 && volume !== 'muted') {
      setVolume('muted')
    }
    else if ((volumeValue > 0 && volumeValue <= 30) && volume !== 'low') {
      setVolume('low')
    }
    else if ((volumeValue > 30 && volumeValue <= 70) && volume !== 'medium') {
      setVolume('medium')
    }
    else if (volumeValue > 70 && volume !== 'high') {
      setVolume('high')
    }
  }, [volumeValue]) 

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