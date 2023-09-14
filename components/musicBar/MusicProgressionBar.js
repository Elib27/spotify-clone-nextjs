import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeTime } from '@/store/store'
import styled from "styled-components"

const MusicProgressionBarBackground = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: #5e5e5e;
  position: absolute;
  left: 0;
`
const MusicProgressionBarFill = styled(MusicProgressionBarBackground)`
  background-color: #fff;
  width: 100%;
  transform: translateX(calc(var(--progression-bar-fill) - 100%));
  ${({ $active }) => $active && `
    background-color: #1db954;
  `}
`
const MusicBarCircle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  position: absolute;
  top: 50%;
  left: var(--progression-bar-fill);
  margin-left: -6px;
  transform: translateY(-50%);
  z-index: 100;
  display: none;
  user-select: none;
  ${({ $active }) => $active && `
    display: block;
  `}
`
const ProgressionBar = styled.div`
  --progression-bar-fill: 65%;
  height: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  &:hover ${MusicProgressionBarFill} {
    background-color: #1db954;
  }
  &:hover ${MusicBarCircle} {
    display: block;
  }
`
const MusicProgressionBarWrapper = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`

function convertPercentageToTimeInSec(percentage, duration) {
  return Math.floor((percentage * duration) / 100)
}

export default function MusicProgressionBar({ isProgressionBarDragged, setIsProgressionBarDragged }) {

  const [progressionPercentage, setProgressionPercentage] = useState(0)
  const barContainer = useRef(null)

  const music = useSelector(state => state.music)
  const dispatch = useDispatch()

  function updateProgressionBar(e) {
    const barWidth = barContainer.current.offsetWidth;
    const barOffset = barContainer.current.getBoundingClientRect().left;
    let newProgressionPercentage = (e.clientX - barOffset) / barWidth * 100;

    if (newProgressionPercentage < 0) newProgressionPercentage = 0;
    else if (newProgressionPercentage > 100) newProgressionPercentage = 100;

    setProgressionPercentage(newProgressionPercentage);
  }

  useEffect(() => {
    function handleMouseDown(e) {
      setIsProgressionBarDragged(true)
      updateProgressionBar(e)
      document.addEventListener("mousemove", updateProgressionBar)
    }
    function handleMouseUp() {
      document.removeEventListener("mousemove", updateProgressionBar)
      setIsProgressionBarDragged(false)
    }

    const barContainerCopy = barContainer.current
    barContainerCopy.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      barContainerCopy.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [setIsProgressionBarDragged])

  useEffect(() => {
    if (!isProgressionBarDragged) {
      setProgressionPercentage(music.time / music.duration * 100)
    }
    else {
      dispatch(changeTime(convertPercentageToTimeInSec(progressionPercentage, music.duration)))
    }
  }, [music.time, music.duration, isProgressionBarDragged, dispatch, progressionPercentage])

  useEffect(() => {
    barContainer.current.style.setProperty("--progression-bar-fill", progressionPercentage + '%')
  }, [progressionPercentage])

  return (
    <ProgressionBar ref={barContainer}>
      <MusicBarCircle $active={isProgressionBarDragged} />
      <MusicProgressionBarWrapper>
        <MusicProgressionBarBackground />
        <MusicProgressionBarFill $active={isProgressionBarDragged} />
      </MusicProgressionBarWrapper>
    </ProgressionBar>
  )
}