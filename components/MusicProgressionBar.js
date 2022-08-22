import styled from "styled-components"

const MusicProgressionBarBackground = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: #5e5e5e;
  position: absolute;
  left: 0;
`
const MusicProgressionBarFill = styled(MusicProgressionBarBackground)`
  background-color: #fff;
  width: 100%;
  transform: translateX(calc(var(--progression-bar-fill) - 100%));
`
const MusicBarCircle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  position: absolute;
  top: 50%;
  left: var(--progression-bar-fill);
  margin-left: -6px;
  transform: translateY(-50%);
  z-index: 100;
  display: none;
`
const ProgressionBar = styled.div`
  --progression-bar-fill: 65%;
  height: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  &:hover ${MusicProgressionBarFill} {
    background-color: #1db954;
  }
  &:hover ${MusicBarCircle} {
    display: block;
  }
`
const MusicProgressionBarWrapper = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`

export default function MusicProgressionBar() {
  return (
    <ProgressionBar>
      <MusicBarCircle />
      <MusicProgressionBarWrapper>
        <MusicProgressionBarBackground />
        <MusicProgressionBarFill />
      </MusicProgressionBarWrapper>
    </ProgressionBar>
  )
}
