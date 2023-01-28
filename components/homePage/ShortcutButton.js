import styled from "styled-components"
import Image from 'next/image'
import Link from "next/link"
import FavoriteLogo from '../../public/home_logos/favorite_episods.svg'
import PlayLogo from '../../public/home_logos/play_logo.svg'
import DoubleMusicNoteLogo from '../../public/tracks_logos/double_music_note.svg'

const PlayButton = styled.div`
  height: 48px;
  width: 48px;
  margin-left: 8px;
  background-color: #1ed760;
  border-radius: 50%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  &:hover {
    transform: scale(1.04);
  }
`
const ShortcutContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #ffffff1a;
  position: relative;
  border-radius:4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #474747;
    ${PlayButton} {
      opacity: 1;
      pointer-events: auto;
    }
  }
`
const ImageContainer = styled.div`
  height: 100%;
  aspect-ratio: 1;
  position: relative;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
`
const LogoContainer = styled.div`
  height: 100%;
  aspect-ratio: 1;
  background-color: ${({ backgroundColor}) => backgroundColor || '#056952'};
  color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FavoriteLogoWrapper = styled.div`
  height: 32px;
  margin-bottom: 8px;
`
const RightContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`
const ShortcutTitle = styled.div`
   font-size: 1rem;
   font-weight: 700;
   color: #fff;
`

export default function ShortcutButton({ title, link, cover_url, isEpisodesCollection }) {
  return (
    <ShortcutContainer>
      <ImageContainer>
        {isEpisodesCollection ? (
            <LogoContainer>
              <FavoriteLogoWrapper>
                <FavoriteLogo />
              </FavoriteLogoWrapper>
            </LogoContainer>
          ) : (
            cover_url ? (
              <Image src={cover_url} layout="fill" alt="category cover" />
            ) : (
              <LogoContainer backgroundColor="#333">
                <DoubleMusicNoteLogo height="38" width="38"/>
              </LogoContainer>
            )
          )
        }
      </ImageContainer>
      <RightContainer>
        <Link href={link}>
          <ShortcutTitle>{title}</ShortcutTitle>
        </Link>
        <PlayButton>
          <PlayLogo />
        </PlayButton>
      </RightContainer>
    </ShortcutContainer>
  )
}
