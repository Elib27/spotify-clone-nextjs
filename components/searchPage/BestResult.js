import styled from "styled-components"
import Image from 'next/image'
import PlayLogo from '../../public/tracks_logos/play_logo_small.svg'

const Container = styled.div`
  grid-column: span 2;
`
const TopTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  padding-bottom: 16px;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  line-height: 1.6;
`
const PlayButton = styled.button`
  height: 48px;
  width: 48px;
  background-color: #1ed760;
  border-radius: 50%;
  color: #000;
  display: flex;
  color: #000;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
  &:hover {
    transform: scale(1.04);
    background-color: #1fdf64;
  }
`
const PlayButtonAnimationContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: none;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`
const CardContainer = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  border-radius: 6px;
  background-color: #181818;
  transition: background-color 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  &:hover {
    background-color: #282828;
    ${PlayButtonAnimationContainer} {
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const ImageContainer = styled.div`
  height: 92px;
  width: 92px;
  ${({isRound}) => isRound ? 'border-radius: 50%;' : 'border-radius: 4px;'}
  overflow: hidden;
  position: relative;
`
const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 4px;
  line-height: 1.6;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
`
const ResultCategory = styled.div`
  width: min-content;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  padding: 5.5px 12px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  line-height: 1.6;
`

export default function BestResult({title, category, cover_url}) {
  return (
    <Container>
      <TopTitle>Meilleur résultat</TopTitle>
      <CardContainer>
        <ImageContainer isRound={category === 'artiste'}>
          <Image src={cover_url} fill alt="result cover"/>
        </ImageContainer>
        <div>
          <CardTitle>{title}</CardTitle>
          <ResultCategory>{category}</ResultCategory>
        </div>
        <PlayButtonAnimationContainer>
          <PlayButton>
            <PlayLogo height="24" width="24" />
          </PlayButton>
        </PlayButtonAnimationContainer>
      </CardContainer>
    </Container>
  )
}
