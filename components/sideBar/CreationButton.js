import styled from "styled-components"
import { useState } from "react"
import { useSelector, useDispatch} from "react-redux"
import { togglePlaying } from "../../store/store"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import SoundLogo from "../../public/sideBar_logos/sound.svg"
import PauseLogo from "../../public/musicBar_logos/pause_music.svg"

const LinkLabel = styled.p`
  font-size: 0.875rem;
  margin-left: 16px;
  color: ${({ active }) => active ? "#fff" : '#b3b3b3'};
  font-weight: 700;
  width: 100%;
  text-align: left;
  transition: color 0.3s ease-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ isSelected }) => isSelected && `color: #fff;`}
`
const LogoContainer = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2px;
  background: ${({ logoBackground }) => logoBackground};
  opacity: ${({ active }) => active ? 1 : 0.7};
  transition: opacity 0.3s ease-out;
  ${({ isSelected }) => isSelected && `opacity: 1;`}
`
const CreationLinkButton = styled.div`
  height: 40px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover ${LinkLabel}{
    color: #fff;
  } 
  &:hover ${LogoContainer} {
    opacity: 1;
  }
`
const SoundButton = styled.button`
  height: 16px;
  width: 16px;
  padding: 0;
  border: 0;
  background: transparent;
  margin-left: 16px;
  color: #fff;
`

export default function CreationButton({ label, link, playlist, imageSrc, imageAlt, logoBackground }) {

  const router = useRouter()
  const music = useSelector(state => state.music)
  const dispatch = useDispatch()

  const [isHovering, setIsHovering] = useState(false)

  function handleClickPauseMusic() {
    dispatch(togglePlaying())
    setIsHovering(false)
  }

  const isPlayingTrack = !!playlist && music.currentPlaylist === playlist && music.isPlaying

  return (
    <Link href={link ?? '/'}>
      <CreationLinkButton>
        <LogoContainer
          logoBackground={logoBackground}
          isSelected={router.asPath === link}
        >
          <Image src={imageSrc} alt={imageAlt} width={12} height={12} />
        </LogoContainer>
        <LinkLabel
          isSelected={router.asPath === link}
        >
          {label}
        </LinkLabel>
        {isPlayingTrack && (
          <SoundButton
            aria-label="Lecture"
            onClick={handleClickPauseMusic}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {isHovering ? <PauseLogo /> : <SoundLogo />}
          </SoundButton>
        )}
      </CreationLinkButton>
    </Link>
  )
}
