import styled from "styled-components"
import { useEffect, useState } from "react"
import PlaylistButton from "./PlaylistButton"

const PlaylistContainer = styled.div`
  height: 400px;
  overflow-y: scroll;
  padding: 8px 0;
  /* Firefox */
  scrollbar-color: rgba(255,255,255,0.3);
  scrollbar-width: thin;
  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    min-height: 30px;
    border: 2px solid transparent;
    background-color: rgba(255,255,255,0.3);
    background-clip: content-box;
    transition: background-color 0.2s ease-in-out;
    z-index: 9999;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255,255,255,0.5);
  }
`

export default function PlaylistBar() {

  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
    async function getPlaylists() {
      const response = await fetch('/api/getPlaylists')
      const data = await response.json()
      setPlaylists(data)
    }
    getPlaylists()
  }, [])

  if (!playlists) return

  return (
    <PlaylistContainer>
      {playlists.map((playlist) => (
        <PlaylistButton
          name={playlist.name}
          id={playlist.id}
          key={playlist.id}
        />
      ))}
    </PlaylistContainer>
  )
}
