import { useSelector } from "react-redux"
import MusicControlsActive from "./MusicControlsActive"
import MusicControlsDisabled from "./MusicControlsDisabled"

export default function MusicControls() {

  const music = useSelector(state => state.music)

  if (!music.currentTrack.name) {
    return <MusicControlsDisabled />
  }
  return (
    <MusicControlsActive />
  )
}
