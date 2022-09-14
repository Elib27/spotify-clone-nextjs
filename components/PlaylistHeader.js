import styled from "styled-components"
import Image from "next/image"

const TracksHeader  = styled.div`
  height: clamp(340px, 30vh, 500px);
  width: 100%;
  padding: 0 32px 24px;
  background: ${({background}) => background};
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

export default function PlaylistHeader({ title, cover_url, background, owner, tracks_number, isPodcastPlaylist }) {
  return (
    <TracksHeader background={background}>
      <HeaderImageContainer>
        <Image
          src={cover_url}
          layout="fill"
          alt="playlist cover"
        />
      </HeaderImageContainer>
      <TitleContainer>
        <MainTitle>{title}</MainTitle>
        <CategoryTitle>PLAYLIST</CategoryTitle>
        <HeaderInformations>
          <Username>{owner}</Username>
          {tracks_number > 0 && (
            <>
              <Separator>•</Separator>
              <TracksNumber>{`${tracks_number} ${isPodcastPlaylist ? 'épisode' : 'titre'} ${tracks_number > 1 ? 's' : ''}`}</TracksNumber>
            </>
          )}
        </HeaderInformations>
      </TitleContainer>
    </TracksHeader>
  )
}
