import styled from "styled-components"
import Image from "next/image"
import FavoriteLogo from "../../public/tracks_logos/favorite_logo.svg"

const Header = styled.div`
  height: clamp(340px, 30vh, 500px);
  width: 100%;
  margin-top: -94px;
  padding: 0 32px 24px;
  background: ${({background}) => background};
  display: flex;
  align-items: flex-end;  
`
const HeaderImageContainer = styled.div`
  height: 192px;
  width: 192px;
  box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
  margin-right: 24px;
  color: #1ed760;
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${({isGreenBG}) => !isGreenBG && `
    background-color: #056952;
    border-radius: 4px;
  `}
`
const FavoriteLogoContainer = styled.div`
  height: 71.5px;
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
  margin: 8px 0;
  color: #fff;
`
const MainTitle = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  margin: 10px 0 11.5px;
  white-space: nowrap;
  line-height: normal;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
`
const HeaderInformations = styled.div`
  display: flex;
  margin-top: 8px;
  line-height: 1.6;
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
  text-align: center;
`
const Separator = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0 4px;
  text-align: center;
`

export default function PlaylistHeader({ title, cover_url, background, owner, tracks_number, isPodcastPlaylist }) {
  return (
    <Header background={background}>
      <HeaderImageContainer isGreenBG={cover_url}>
        {cover_url ? (
          <Image src={cover_url} layout="fill" alt="playlist cover" />
        ) : (
          <FavoriteLogoContainer>
            <FavoriteLogo />
          </FavoriteLogoContainer>
        )}

      </HeaderImageContainer>
      <TitleContainer>
        <CategoryTitle>PLAYLIST</CategoryTitle>
        <div>
          <MainTitle>{title}</MainTitle>
        </div>
        <HeaderInformations>
          <Username>{owner}</Username>
          {tracks_number > 0 && (
            <>
              <Separator>•</Separator>
              <TracksNumber>{`${tracks_number} ${isPodcastPlaylist ? 'épisode' : 'titre'}${tracks_number > 1 ? 's' : ''}`}</TracksNumber>
            </>
          )}
        </HeaderInformations>
      </TitleContainer>
    </Header>
  )
}
