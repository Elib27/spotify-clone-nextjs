import styled from "styled-components"
import Image from "next/image"
import PlayLogo from '../../public/tracks_logos/play_logo_small.svg'
import OptionsLogo from '../../public/tracks_logos/options_logo.svg'

const Separator = styled.hr`
  border-color: #ffffff1a;
  height: 2px;
  width: 100%;
`
const Wrapper = styled.div`
  position: relative;
`
const Container = styled.div`
  width: 100%;
  padding: 16px;
  margin: 0 -16px;
  color: #b3b3b3;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    & ~ ${Separator} {
      display: none;
    }
  }
`
const LeftContainer = styled.div`

`
const RightContainer = styled.div`

`
const PodcastCoverContainer = styled.div`
  height: 112px;
  width: 112px;
  box-shadow: rgb(0 0 0 / 50%) 0px 4px 60px;
  border-radius: 8px;
  margin-right: 24px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
`
const PodcastTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  line-height: 24px;
  word-break: break-word;
  &:hover {
    text-decoration: underline;
  }
`
const PodcastOwner = styled(PodcastTitle)`
  font-size: 0.875rem;
`
const Description = styled.p`
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 8px 0 16px;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ControlsLeftContainer = styled.div`
  display: flex;
  align-items: center;
`
const PlayButton = styled.button`
  height: 32px;
  width: 32px;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  margin-right: 16px;
  &:hover {
    transform: scale(1.04);
  }
`
const TimeContainer = styled.div`
  font-size: 0.875rem;
  margin-left: 8px;
`
const TimeInfo = styled.span`
  &:last-of-type::before{
    content: "·";
    margin: 0 4px;
  }
`
const ControlsRightContainer = styled.div`
  height: 32px;
  width: 100px;
  background-color: red;
`

export default function LikedPodcast({title, description, cover_url, owner, date, duration}) {
  return (
    <Wrapper>
      <Separator />
      <Container>
        <LeftContainer>
          <PodcastCoverContainer>
            <Image src={cover_url} layout="fill" alt="podcast cover" />
          </PodcastCoverContainer>
        </LeftContainer>
        <RightContainer>
          <PodcastTitle>{title}</PodcastTitle>
          <PodcastOwner>{owner}</PodcastOwner>
          <Description>{description}</Description>
          <ControlsContainer>
            <ControlsLeftContainer>
              <PlayButton>
                <PlayLogo height={16} width={16} />
              </PlayButton>
              <TimeContainer>
                <TimeInfo>{date}</TimeInfo>
                <TimeInfo>{duration}</TimeInfo>
              </TimeContainer>
            </ControlsLeftContainer>
            <ControlsRightContainer>

            </ControlsRightContainer>
          </ControlsContainer>
        </RightContainer>
      </Container>
    </Wrapper>
  )
}
