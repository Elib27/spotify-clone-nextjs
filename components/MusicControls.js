import styled from "styled-components"
import Image from "next/image"

const MusicControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ControlsContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`
const ControlButton = styled.button`
  height: 16px;
  width: 16px;
  opacity: 0.7;
  border: none;
  background-color: transparent;
  color: #fff;
  &:hover {
    opacity: 1;
  }
`

export default function MusicControls() {
  return (
    <MusicControlsContainer>
      <ControlsContainer>
        <ControlButton>
          <Image src="/musicBar_logos/prev_music.svg" alt="next music logo" width={16} height={16} />
        </ControlButton>
        <ControlButton>
          <Image src="/musicBar_logos/next_music.svg" alt="next music logo" width={16} height={16} />
        </ControlButton>
      </ControlsContainer>
    </MusicControlsContainer>
  )
}

// mettre svg en inline