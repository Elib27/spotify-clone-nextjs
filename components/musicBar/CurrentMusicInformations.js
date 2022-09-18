import styled from "styled-components"
import { useState } from 'react'
import Image from "next/image"
import Heart from '../../public/musicBar_logos/heart.svg'
import HeartFull from '../../public/musicBar_logos/heart_full.svg'
import ScreenDisplay from '../../public/musicBar_logos/screen_display.svg'

const Container = styled.div`
  width: 30%;
  flex-grow: 1;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const ScreenButton = styled.button`
  height: 32px;
  width: 32px;
  background-color: transparent;
  margin-top: -1px;
  color: #fff;
  border: none;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`
const HeartButton = styled(ScreenButton)`
  margin-top: 0;
  ${({isLiked}) => isLiked && `
    color: #1db954;
    opacity: 1;
  `}
`
const CurrentMusicCover = styled.div`
  height: 56px;
  width: 56px;
  position: relative;
  cursor: pointer;
`
const MusicInformations = styled.div`
  margin: 0 8px;
`
const MusicTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: #fff;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  line-height: 1.6;
  padding: 0 12px 0 6px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const MusicArtist = styled(MusicTitle)`
  font-size: 0.6875rem;
  color: #b3b3b3;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`

export default function CurrentMusicInformations() {
  const [isLiked, setIsLiked ] = useState(false)
  return (
    <Container>
      <CurrentMusicCover>
        <Image src="https://i.scdn.co/image/ab67616d000048519ee288482ec17f1d091ffad2" alt='plk album cover' layout="fill"/>
      </CurrentMusicCover>
      <MusicInformations>
        <MusicTitle>Monégasque</MusicTitle>
        <MusicArtist>PLK</MusicArtist>
      </MusicInformations>
      <HeartButton
        isLiked={isLiked}
        onClick={() => setIsLiked(curr => !curr)}
      >
        {isLiked ? <HeartFull /> : <Heart />}
      </HeartButton>
      <ScreenButton>
        <ScreenDisplay />
      </ScreenButton>
    </Container>
  )
}