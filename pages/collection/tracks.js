import styled from 'styled-components'
import Image from 'next/image'
import PlayLogo from '../../public/tracks_logos/play_logo.svg'
import DurationLogo from '../../public/tracks_logos/time_logo.svg'

const Container = styled.div`

`
const TraksHeader  = styled.div`
  height: clamp(340px, 30vh, 500px);
  width: 100%;
  padding: 0 32px 24px;
  background: linear-gradient(#5038a0 0, #291e50 100%);
  display: flex;
  align-items: flex-end;  
`
const HeaderImageContainer = styled.div`
  height: 192px;
  aspect-ratio: 1;
  box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
  margin-right: 24px;
  position: relative;
  display: flex;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`
const CategoryTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
`
const MainTitle = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  margin: 0.08rem 0px 0.12rem;
  white-space: nowrap;
`
const HeaderInformations = styled.div`
  display: flex;
  margin-top: 8px;
`
const Username = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const TracksNumber = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
`
const Separator = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0 4px;
`
const PlayMusicSection = styled.section`
  padding: 24px 32px;
`
const PlayButton = styled.div`
  height: 56px;
  width: 56px;
  margin-left: 8px;
  background-color: #1ed760;
  border-radius: 50%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  &:hover {
    transform: scale(1.04);
  }
`
const TracksContainer = styled.section`
  
`
const TracksSectionRows = styled.div`
  height: 36px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 16px 6fr 4fr 3fr minmax(120px,1fr);
  grid-gap: 16px;
  border-bottom: 1px solid hsla(0,0%,100%,0.1);
  margin-bottom: 16px;
`
const TracksSectionRowTitle = styled.div`
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  color: #b3b3b3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:first-of-type {
    font-size: 1rem;
    justify-self: end;
  }
  &:last-of-type{
    justify-self: end;
    margin-right: 32px;
  }
`

export default function tracks() {
  return (
    <Container>
      <TraksHeader>
        <HeaderImageContainer>
          <Image
            src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
            layout="fill"
            alt="liked tracks cover"
          />
        </HeaderImageContainer>
        <TitleContainer>
          <MainTitle>Titres likés</MainTitle>
          <CategoryTitle>PLAYLIST</CategoryTitle>
          <HeaderInformations>
            <Username>eliot</Username>
            <Separator>•</Separator>
            <TracksNumber>1&nbsp;titre</TracksNumber>
          </HeaderInformations>
        </TitleContainer>
      </TraksHeader>
      <PlayMusicSection>
        <PlayButton>
          <PlayLogo />
        </PlayButton>
      </PlayMusicSection>
      <TracksContainer>
        <TracksSectionRows>
          <TracksSectionRowTitle>#</TracksSectionRowTitle>
          <TracksSectionRowTitle>TITRE</TracksSectionRowTitle>
          <TracksSectionRowTitle>ALBUM</TracksSectionRowTitle>
          <TracksSectionRowTitle>AJOUTÉ LE</TracksSectionRowTitle>  
          <TracksSectionRowTitle>
            <DurationLogo />
          </TracksSectionRowTitle>
        </TracksSectionRows>
      </TracksContainer>
    </Container>
  )
}
