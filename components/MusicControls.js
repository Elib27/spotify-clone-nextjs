import styled from "styled-components"

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
  &:hover {
    fill: #fff;
  }
`

export default function MusicControls() {
  return (
    <MusicControlsContainer>
      <ControlsContainer>
      </ControlsContainer>
    </MusicControlsContainer>
  )
}
