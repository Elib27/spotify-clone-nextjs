import styled, { keyframes } from "styled-components"
import { useEffect, useState, useRef } from "react"
import useResizeObserver from "@/hooks/useResizeObserver"

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
  animation-delay: ${({ delay }) => delay}s;
`

export default function MusicBarsAnimation() {

  const container = useRef(null)
  const bars = useRef([])
  const [barsNumber, setBarsNumber] = useState(0)
  const containerDimensions = useResizeObserver(container)

  useEffect(() => {
    const { width } = containerDimensions || { width: 1200 }
    const barsNum = Math.round(width / 28)
    setBarsNumber(barsNum)
  }, [containerDimensions])

  useEffect(() => {
    const MAX_BARS = 50
    bars.current = Array(MAX_BARS).fill(null).map((_, i) => <Bar key={i} delay={-(Math.random() * 2)} />)
  }, [])

  return (
    <Container ref={container}>
      {bars.current.slice(0, barsNumber)}
    </Container>
  )
}
