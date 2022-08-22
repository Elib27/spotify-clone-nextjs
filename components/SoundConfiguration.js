import styled from "styled-components"
import Microphone from '../public/musicBar_logos/microphone.svg'
import WaitList from '../public/musicBar_logos/wait_list.svg'
import Speaker from '../public/musicBar_logos/speaker.svg'
import HighVolume from '../public/musicBar_logos/high_volume.svg'
import LowVolume from '../public/musicBar_logos/low_volume.svg'
import MutedVolume from '../public/musicBar_logos/muted_volume.svg'
import MusicProgressionBar from "./MusicProgressionBar"

const Container = styled.div`
  width: 30%;
  flex-grow: 1;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Button = styled.button`
  height: 32px;
  width: 32px;
  background-color: transparent;
  color: #fff;
  border: none;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
  }
  &:last-of-type {
    opacity: 1;
  }
`
const VolumeBarContainer = styled.div`
  width: 125px;
  display: flex;
  align-items: center;
  position: relative;
`

export default function SoundConfiguration() {
  return (
    <Container>
      <Button>
        <Microphone />
      </Button>
      <Button>
        <WaitList />
      </Button>
      <Button>
        <Speaker />
      </Button>
      <VolumeBarContainer>
        <Button>
          <HighVolume />
        </Button>
        <MusicProgressionBar />
      </VolumeBarContainer>
    </Container>
  )
}
