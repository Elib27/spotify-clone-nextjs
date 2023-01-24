import styled from "styled-components"
import { useEffect, useState } from "react"
import PlaylistButton from "./PlaylistButton"

const PlaylistContainer = styled.div`
  padding: 8px 0;
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
