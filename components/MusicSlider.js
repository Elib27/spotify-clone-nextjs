import styled from "styled-components"

const Container = styled.div`
  height: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`
const Slider = styled.input`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: #5e5e5e;
  border: none;
  outline: none;
  position: absolute;
  left: 0;
  accent-color: #fff;
  opacity: 1;
  &::-webkit-slider-thumb{
    -webkit-appearance: none; 
    appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
    display: none;
  }
  &::-webkit-slider-runnable-track {
    border: none;
    outline: none;
  }
  &::-moz-range-progress {
    background-color: #fff;
  }
  &:hover::-webkit-slider-thumb {
    display: block;
  }
  &:hover {
    accent-color: #1db954;
  }
`

export default function MusicSlider({ SoundDurationInSecs }) {
  return (
    <Container>
      <Slider
        type="range"
        min="0"
        max="100"
        onChange={(e) => console.log(e.target.value)}
      />
      {/* <input type="range" min="0" max={SoundDurationInSecs} value="50"></input> */}
    </Container>
  )
}

// finir slider 
// ajouter JS pour la partie de gauche