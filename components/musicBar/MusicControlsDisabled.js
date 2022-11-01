
import styled from "styled-components"
import RandomMusicLogo from '../../public/musicBar_logos/random_music.svg'
import PrevMusicLogo from '../../public/musicBar_logos/prev_music.svg'
import NextMusicLogo from '../../public/musicBar_logos/next_music.svg'
import PauseMusicLogo from '../../public/musicBar_logos/pause_music.svg'
import LoopMusic1Logo from '../../public/musicBar_logos/loop_music1.svg'

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
const DisabledControlButton = styled.button`
  height: 32px;
  width: 32px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #5e5e5e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
`
const PlayButton = styled(DisabledControlButton)`
  background-color: #5e5e5e;
  border-radius: 50%;
  color: #000;
  opacity: 1;
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
const TimerContainer = styled.div`
  min-width: 40px;
  font-size: 0.6875rem;
  font-weight: 400;
  color: #a7a7a7;
  text-align: left;
  user-select: none;
  line-height: 1.6;
  &:first-of-type {
    text-align: right;
  }
`
const MusicProgressionBarBackground = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: #5e5e5e;
  position: absolute;
  left: 0;
`
const DisabledProgressionBar = styled.div`
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

export default function MusicControlsDisabled() {

  return (
    <MusicControlsContainer>
      <ControlsContainer>
        <SideContainer>
          <DisabledControlButton disabled>
            <RandomMusicLogo />
          </DisabledControlButton>
          <DisabledControlButton disabled>
            <PrevMusicLogo />
          </DisabledControlButton>
        </SideContainer>
        <PlayButton disabled>
          <PauseMusicLogo />
        </PlayButton>
        <SideContainer>
          <DisabledControlButton disabled>
            <NextMusicLogo />
          </DisabledControlButton>
          <DisabledControlButton disabled>
            <LoopMusic1Logo />
          </DisabledControlButton>
        </SideContainer>
      </ControlsContainer>
      <MusicProgressionBarContainer>
        <TimerContainer>00:00</TimerContainer>
        <DisabledProgressionBar>
          <MusicProgressionBarWrapper>
            <MusicProgressionBarBackground />
          </MusicProgressionBarWrapper>
        </DisabledProgressionBar>
        <TimerContainer>00:00</TimerContainer>
      </MusicProgressionBarContainer>
    </MusicControlsContainer>
  )
}