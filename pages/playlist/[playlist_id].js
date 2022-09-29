import styled from "styled-components"
import { useRouter } from "next/router"

const PlaylistTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`

export default function Playlist() {
  const router = useRouter()
  const { playlist_id } = router.query
  return (
    <PlaylistTitle>Playlist : {playlist_id}</PlaylistTitle>
  )
}
