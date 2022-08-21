import styled from "styled-components"
import MusicControls from "./MusicControls"

const MusicBarContainer = styled.footer`
  height: 90px;
  width: max(100vw, 620px);
  padding: 0 16px;
  background-color: #181818;
  border-top: 1px solid #282828;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function MusicBar() {
  return (
    <MusicBarContainer>
      <MusicControls />
    </MusicBarContainer>
  )
}
