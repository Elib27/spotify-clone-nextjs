import styled from 'styled-components'
import Image from 'next/image'
import HeartLogo from '../../public/tracks_logos/heart.svg'
import OptionsLogo from '../../public/tracks_logos/options_logo.svg'
import SmallPlayLogo from '../../public/tracks_logos/play_logo_small.svg'

const OptionsContainer = styled.button`
  height: 16px;
  width: 16px;
  background-color: transparent;
  border: none;
  color: #fff;
  opacity: 0;
  pointer-events: none;
`
const Number = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #b3b3b3;
`
const PlayButtonContainer = styled.button`
  height: 16px;
  width: 16px;
  background-color: transparent;
  border: none;
  color: #fff;
  display: none;
`
const TrackArtist = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: #a7a7a7;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`
const Container = styled.div`
  height: 56px;
  width: 100%;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 16px 4fr 2fr minmax(120px,1fr);
  grid-gap: 16px;
  border-bottom: 1px solid transparent;
  border-radius: 4px;
  position: relative;
  color: #b3b3b3;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
    ${OptionsContainer} {
      opacity: 1;
      pointer-events: auto;
    }
    ${Number} {
      display: none;
    }
    ${PlayButtonContainer} {
      display: block;
    }
    ${TrackArtist} {
      color: #fff;
    }
  }
`
const NumberRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const TitleRow = styled.div`
  display: flex;
  align-items: center;
`
const TracksCover = styled.div`
  height: 100%;
  margin-right: 16px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`
const TracksInformations = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 8px;
  line-height: 1.6;
`
const TrackTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const TrackInformationsBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const ExplicitLogo = styled.span`
  color: #121212;
  font-size: 9px;
  background-color: hsla(0, 0%, 100%, 0.6);
  border-radius: 2px;
  padding: 3px 5px;
  line-height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`
const TrackAlbumRow = styled.div`
  display: flex;
  align-items: center;
`
const TrackAlbum = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`
const LastRow = styled.div`
  display: flex;
  align-items: center;
`
const LikeContainer = styled.div`
  height: 16px;
  width: 16px;
  color: #1ed760;
  margin-right: 16px;
`
const DurationRow = styled.div`
  margin-right: 16px;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const DurationContainer = styled.div`
  font-size: 0.875rem;
  color: #a7a7a7;
  text-align: center;
`

export default function LikedTrack({ title, artist, album, cover_url, explicit, duration, number}) {
  return (
    <Container>
      <NumberRow>
        <Number>{number}</Number>
        <PlayButtonContainer>
          <SmallPlayLogo />
        </PlayButtonContainer>
      </NumberRow>
      <TitleRow>
        <TracksCover>
          <Image src={cover_url} width={40} height={40} alt="album cover"/>
        </TracksCover>
        <TracksInformations>
          <TrackTitle>{title}</TrackTitle>
          <TrackInformationsBottom>
            {explicit && <ExplicitLogo>E</ExplicitLogo>}
            <TrackArtist>{artist}</TrackArtist>
          </TrackInformationsBottom>
        </TracksInformations>
      </TitleRow>
      <TrackAlbumRow>
        <TrackAlbum>{album}</TrackAlbum>
      </TrackAlbumRow>
      <LastRow>
        <LikeContainer>
          <HeartLogo />
        </LikeContainer>
        <DurationRow>
          <DurationContainer>
            {duration}
          </DurationContainer>
        </DurationRow>
        <OptionsContainer>
          <OptionsLogo />
        </OptionsContainer>
      </LastRow>
    </Container>
  )
}
