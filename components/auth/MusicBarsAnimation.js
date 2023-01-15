import styled, { keyframes } from "styled-components"
import { useState, useRef } from "react"
import useResizeObserver from "../../hooks/useResizeObserver"

const Container = styled.ul`
  height: clamp(30px, 10vh, 60px);
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 0 0;
`
const barAnimation = keyframes`
  0% {height: 5%}
  20% {height: 70%}
  40% {height: 100%}
  60% {height: 30%}
  80% {height: 50%}
  100% {height: 10%}
`
const Bar = styled.li`
  height: 100%;
  width: 20px;
  list-style: none;
  margin: 0 4px;
  padding: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #1ed760;
  animation: ${barAnimation} 2s ease-in-out infinite reverse;
  animation-delay: ${({delay}) => delay}s;
`

export default function MusicBarsAnimation() {
  
  const container = useRef(null)
  
  const containerDimensions = useResizeObserver(container)
  const { width } = containerDimensions || {width: 1200}

  const barsNumber = Math.round(width / 28);

  const bars = [];

  for (let i = 0; i < barsNumber; i++) {
    const delay = -(Math.random() * 2)
    bars.push(
      <Bar key={i} delay={delay}/>
    )
  }

  return (
    <Container ref={container}>
      {bars}
    </Container>
  )
}
