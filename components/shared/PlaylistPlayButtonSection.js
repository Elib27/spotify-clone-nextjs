import styled from "styled-components"
import PlayLogo from '../../public/tracks_logos/play_logo.svg'
import PauseLogo from '../../public/tracks_logos/pause_logo.svg'

const PlayMusicSection = styled.section`
  padding: 24px 32px;
  position: relative;
`
const PlayButton = styled.button`
  height: 56px;
  width: 56px;
  background-color: #1ed760;
  border-radius: 50%;
  outline: 0;
  border: 0;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  &:hover {
    transform: scale(1.04);
  }
`
function PlaylistPlayButtonSection({ handleButtonClick, isPlaying }) {
  return (
    <PlayMusicSection>
      <PlayButton onClick={handleButtonClick}>
        {isPlaying ? <PauseLogo /> : <PlayLogo />}
      </PlayButton>
    </PlayMusicSection>
  )
}
export default PlaylistPlayButtonSection