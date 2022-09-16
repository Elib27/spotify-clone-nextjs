import styled from "styled-components"
import { useEffect } from 'react'
import CurrentMusicInformations from "./CurrentMusicInformations"
import MusicControls from "./MusicControls"
import SoundConfiguration from "./SoundConfiguration"

const MusicBarWrapper = styled.footer`
  height: 91px;
  width: 100vw;
  min-width: 768px;
  padding: 0 16px;
  background-color: #181818;
  border-top: 1px solid #282828;
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

  async function testAPICall1() {
    const res = await fetch('/api/getTopTracks')
    const data = await res.json()
    console.log(data) 
  }

  async function testAPICall2() {
    const res = await fetch('/api/getSearchCategories')
    const data = await res.json()
    console.log(data) 
  }
  
  return (
    <MusicBarWrapper>
      <MusicBarContainer>
        <CurrentMusicInformations />
        <MusicControls />
        <SoundConfiguration />
      </MusicBarContainer>
      <button onClick={testAPICall1}>API Call 1</button>
      <button onClick={testAPICall2}>API Call 2</button>
    </MusicBarWrapper>
  )
}
