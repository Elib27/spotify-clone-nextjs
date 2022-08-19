import styled from "styled-components"
import MusicControls from "./MusicControls"

const MusicBarContainer = styled.footer`
  height: 90px;
  width: 100vw;
  padding: 0 16px;
  background-color: #181818;
`

export default function MusicBar() {
  return (
    <MusicBarContainer>
      <MusicControls />
    </MusicBarContainer>
  )
}
