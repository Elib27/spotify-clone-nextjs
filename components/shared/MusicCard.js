import styled from 'styled-components'
import Image from 'next/image'
import DefaultAvatarLogo from '../../public/home_logos/default_avatar.svg'
import PlayLogo from '../../public/tracks_logos/play_logo.svg'

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
  right: 8px;
  bottom: 8px;
  pointer-events: none;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`
const CardContainer = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #181818;
  position: relative;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #262626;
    ${PlayButtonAnimationContainer} {
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const CardImageWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
`
const CardImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 4px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  position: relative;
  overflow: hidden;
  ${({ isRoundImage }) => isRoundImage && `
    border-radius: 50%;
  `}
  img {
    object-fit: cover;
  }
`
const DefaultAvatarLogoContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b3b3b3;
`
const CardTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 4px;
  line-height: 1.6;
`
const CardSubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: #a7a7a7;
  line-height: 1.6;
  padding-bottom: 8px;
  max-height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default function MusicCard({ cover_url, title, description, isRoundImage, noPlayingButton }) {
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImageContainer isRoundImage={isRoundImage}>
          {
            cover_url ?
              (
                <Image src={cover_url} alt="song cover" fill />
              ) : (
                <DefaultAvatarLogoContainer>
                  <DefaultAvatarLogo height="64" width="64" />
                </DefaultAvatarLogoContainer>
              )
          }
        </CardImageContainer>
        {!noPlayingButton && (
          <PlayButtonAnimationContainer>
            <PlayButton>
              <PlayLogo />
            </PlayButton>
          </PlayButtonAnimationContainer>
        )}
      </CardImageWrapper>
      <CardTitle>{title}</CardTitle>
      {description && <CardSubTitle>{description}</CardSubTitle>}
    </CardContainer>
  )
}
