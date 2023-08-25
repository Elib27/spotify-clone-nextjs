import styled from "styled-components"
import { useRouter } from "next/router"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { togglePlaying } from "../../store/store"
import Link from "next/link"
import SoundLogo from "../../public/sideBar_logos/sound_small.svg"
import PauseLogo from "../../public/sideBar_logos/pause_music_small.svg"

const PlaylistLabel = styled.p`
  font-size: 0.875rem;
  margin:  0;
  color: #b3b3b3;
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ isSelected }) => isSelected && `color: #fff;`}
`
const PlaylistBtn = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  background-color: transparent;
  &:hover ${PlaylistLabel}{
    color: #fff;
  }
`
const SoundButton = styled.button`
  height: 12px;
  width: 12px;
  margin-right: 8px;
  padding: 0;
  border: 0;
  background: transparent;
  margin-left: 16px;
  color: #fff;
`

export default function PlaylistButton({ name, id }) {

  const music = useSelector(state => state.music)
  const dispatch = useDispatch()

  const [isHovering, setIsHovering] = useState(false)

  function handleClickPauseMusic() {
    dispatch(togglePlaying())
    setIsHovering(false)
  }

  const isPlayingTrack = music.currentPlaylist === id && music.isPlaying

  const router = useRouter()
  return (
    <Link href={`/playlist/${id}`}>
      <PlaylistBtn>
        <PlaylistLabel
          isSelected={router.asPath === `/playlist/${id}`}
        >
          {name}
        </PlaylistLabel>
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
      </PlaylistBtn>
    </Link>
  )
}
