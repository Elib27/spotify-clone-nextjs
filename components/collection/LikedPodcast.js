import styled from "styled-components"
import Image from "next/image"
import PlayLogo from '@/public/tracks_logos/play_logo_medium.svg'
import ShareLogo from '@/public/tracks_logos/share_logo.svg'
import DeleteLogo from '@/public/tracks_logos/delete_from_books_logo.svg'
import OptionsLogo from '@/public/tracks_logos/big_options_logo.svg'

const OptionsButton = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  background-color: transparent;
  color: #b3b3b3;
  opacity: 0;
  &:hover {
    color: #fff;
  }
`
const ShareButton = styled(OptionsButton)`
  &:hover {
    transform: scale(1.04);
  }
  &:active {
    transform: scale(1);
    color: #b3b3b3;
  }
`
const Container = styled.div`
  width: 100%;
  padding: 16px;
  color: #b3b3b3;
  border-radius: 4px;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  display: flex;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    ${OptionsButton}, ${ShareButton} {
      opacity: 1;
    }
  }
`
const LeftContainer = styled.div`
  flex-shrink: 0;
`
const RightContainer = styled.div`
  flex-grow: 1;
`
const PodcastCoverContainer = styled.div`
  height: 112px;
  width: 112px;
  box-shadow: rgb(0 0 0 / 50%) 0px 4px 60px;
  border-radius: 8px;
  margin-right: 24px;
  overflow: hidden;
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
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const ControlsContainer = styled.div`
  margin: 24px 0 8px 0; 
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
  line-height: 1.6;
  white-space: nowrap;
`
const TimeInfo = styled.span`
  color: hsla(0, 0%, 100%, 0.6);
  &:last-of-type::before{
    content: "·";
    color: hsla(0, 0%, 100%, 0.6);
    margin: 0 4px;
  }
  &:last-of-type {
    color: hsla(0, 0%, 100%, 0.7);
  }
`
const ControlsRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`
const DeleteFromEpisodesButton = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  background-color: transparent;
  color: #1ed760;
`

export default function LikedPodcast({ title, description, cover_url, podcast, date, duration }) {
  return (
    <Container>
      <LeftContainer>
        <PodcastCoverContainer>
          <Image src={cover_url} fill alt="podcast cover" />
        </PodcastCoverContainer>
      </LeftContainer>
      <RightContainer>
        <PodcastTitle>{title}</PodcastTitle>
        <PodcastOwner>{podcast}</PodcastOwner>
        <Description>{description}</Description>
        <ControlsContainer>
          <ControlsLeftContainer>
            <PlayButton aria-label="Lire la musique">
              <PlayLogo height={16} width={16} />
            </PlayButton>
            <TimeContainer>
              <TimeInfo>{date}</TimeInfo>
              <TimeInfo>{duration}</TimeInfo>
            </TimeContainer>
          </ControlsLeftContainer>
          <ControlsRightContainer>
            <ShareButton>
              <ShareLogo height={24} width={24} />
            </ShareButton>
            <DeleteFromEpisodesButton>
              <DeleteLogo height={24} width={24} />
            </DeleteFromEpisodesButton>
            <OptionsButton>
              <OptionsLogo />
            </OptionsButton>
          </ControlsRightContainer>
        </ControlsContainer>
      </RightContainer>
    </Container>
  )
}
