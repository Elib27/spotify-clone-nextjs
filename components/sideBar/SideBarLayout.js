import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'

const Wrapper = styled.nav`
--side-bar-width: 255px;
height: calc((100vh - 64px) - 88px);
grid-column: 1;
grid-row: 2;
width: var(--side-bar-width);
border-radius: 8px;
background-color: #121212;
position: relative;
`
const Container = styled.div`
display: flex;
flex-direction: column;
padding: 12px 0 0 8px;
height: 100%;
width: 100%;
`
const Resizer = styled.div`
  height: 100%;
  width: 9px;
  background: linear-gradient(hsla(0,0%,100%,.3),hsla(0,0%,100%,.3)) no-repeat 50%/1px 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  right: -4.5px;
  cursor: col-resize;
  z-index: 1;
  ${({isResizeBarVisible}) => isResizeBarVisible && `
    opacity: 1;
  `}
  &:hover {
    opacity: 1;
  }
`

function SideBarLayout({ children }) {

  const sideBar = useRef(null)
  const resizer = useRef(null)
  const [isResizeBarVisible, setIsResizeBarVisible] = useState(false)
  const [SideBarWidth, setSideBarWidth] = useState(255);

  function resizeSideBar(e) {
    const boundingRect = sideBar.current.getBoundingClientRect();
    let newSize = e.clientX - boundingRect.left;
    if (newSize < 129) {
      newSize = 129;
    }
    else if (newSize > 393) {
      newSize = 393;
    }
    setSideBarWidth(newSize);
  }

  function handleMouseDown() {
    setIsResizeBarVisible(true)
    document.addEventListener("mousemove", resizeSideBar)
    document.addEventListener("mouseup", handleMouseUp)
  }

  function handleMouseUp() {
    setIsResizeBarVisible(false)
    document.removeEventListener("mousemove", resizeSideBar)
    document.removeEventListener("mouseup", handleMouseUp)
  }

  useEffect(() => {
    sideBar.current.style.setProperty('--side-bar-width', `${SideBarWidth}px`);
  }, [SideBarWidth])

  return (
    <Wrapper ref={sideBar}>
      <Container>
        {children}
      </Container>
      <Resizer
        ref={resizer}
        onMouseDown={handleMouseDown}
        isResizeBarVisible={isResizeBarVisible}
      />
    </Wrapper>
  )
}

export default SideBarLayout