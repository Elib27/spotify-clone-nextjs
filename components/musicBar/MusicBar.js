import styled from "styled-components"
import CurrentMusicInformations from "./CurrentMusicInformations"
import MusicControls from "./MusicControls"
import SoundConfiguration from "./SoundConfiguration"

const MusicBarWrapper = styled.footer`
  grid-row: 3;
  grid-column: 1 / -1;
  height: 72px;
  min-width: 768px;
  background-color: #000;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
`
const MusicBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function MusicBar() {

  return (
    <MusicBarWrapper>
      <MusicBarContainer>
        <CurrentMusicInformations />
        <MusicControls />
        <SoundConfiguration />
      </MusicBarContainer>
    </MusicBarWrapper>
  )
}
