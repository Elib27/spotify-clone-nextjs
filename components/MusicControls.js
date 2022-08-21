import styled from "styled-components"
import RandomMusicLogo from "../public/musicBar_logos/random_music.svg"
import PrevMusicLogo from '../public/musicBar_logos/prev_music.svg'
import NextMusicLogo from '../public/musicBar_logos/next_music.svg'
import PlayMusicLogo from '../public/musicBar_logos/play_music.svg'
import PauseMusicLogo from '../public/musicBar_logos/pause_music.svg'
import LoopMusic1Logo from '../public/musicBar_logos/loop_music1.svg'
import LoopMusic2Logo from '../public/musicBar_logos/loop_music2.svg'

const MusicControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 722px;
  width: 40%;
`
const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  gap: 16px;
`
const ControlButton = styled.button`
  height: 32px;
  width: 32px;
  opacity: 0.7;
  border: none;
  background-color: transparent;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
  }
`
const PlayButton = styled(ControlButton)`
  background-color: #fff;
  border-radius: 50%;
  color: #000;
  opacity: 1;
  &:hover {
    transform: scale(1.06);
  }
`
const SideContainer = styled.div`
  display: flex;
  gap: 8px;
`
const MusicProgressionBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`
const MusicProgressionBar = styled.div`
  height: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`
const MusicProgressionBarWrapper = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`
const MusicProgressionBarBackground = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: #5e5e5e;
  position: absolute;
  left: 0;
`
const MusicProgressionBarFill = styled(MusicProgressionBarBackground)`
  --progression-bar-fill: 90%;
  background-color: #fff;
  width: 100%;
  transform: translateX(calc(var(--progression-bar-fill) - 100%));
`
const TimerContainer = styled.div`
  min-width: 40px;
  font-size: 0.6875rem;
  font-weight: 400;
  color: #a7a7a7;
  text-align: left;
  &:first-of-type {
    text-align: right;
  }
`

export default function MusicControls() {
  return (
    <MusicControlsContainer>
      <ControlsContainer>
        <SideContainer>
          <ControlButton>
            <RandomMusicLogo />
          </ControlButton>
          <ControlButton>
            <PrevMusicLogo />
          </ControlButton>
        </SideContainer>
        <PlayButton>
          <PlayMusicLogo />
        </PlayButton>
        <SideContainer>
          <ControlButton>
            <NextMusicLogo />
          </ControlButton>
          <ControlButton>
            <LoopMusic1Logo />
          </ControlButton>
        </SideContainer>
      </ControlsContainer>
      <MusicProgressionBarContainer>
        <TimerContainer>1:27</TimerContainer>
        <MusicProgressionBar>
          <MusicProgressionBarWrapper>
            <MusicProgressionBarBackground />
            <MusicProgressionBarFill />
          </MusicProgressionBarWrapper>
        </MusicProgressionBar>
        <TimerContainer>3:23</TimerContainer>
      </MusicProgressionBarContainer>
    </MusicControlsContainer>
  )
}
