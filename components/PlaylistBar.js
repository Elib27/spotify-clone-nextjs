import styled from "styled-components"
import Link from "next/link"

const PlaylistContainer = styled.div`
  padding: 8px 0;
`
const PlaylistLabel = styled.p`
  font-size: 0.875rem;
  margin:  0;
  color: #b3b3b3;
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const PlaylistButton = styled.button`
  height: 32px;
  width: 100%;
  padding: 0 16px;
  border: 0;
  background-color: transparent;
  &:hover ${PlaylistLabel}{
    color: #fff;
  }
`

const PlayLists = [
  {
    name: 'Vélo',
    id: '1s62EBUhNMW7rWt6NTpvx9'
  },
  {
    name: 'Ma playlist n° 3',
    id: '3s62EBUhNMW7rWt6NTpvx9'
  },
  {
    name: 'Ma playlist n° 2',
    id: 'edffBUhNMW7rWt6NTpvx9'
  },
  {
    name: 'musiques de soirée',
    id: '8jbdhW7rWt6NTpvx9'
  },

]

export default function PlaylistBar() {
  return (
    <PlaylistContainer>
      {PlayLists.map((playlist) => (
        <Link href={`/playlist/${playlist.id}`} key={playlist.id}>
          <PlaylistButton>
            <PlaylistLabel>{playlist.name}</PlaylistLabel>
          </PlaylistButton>
        </Link>
      ))}
    </PlaylistContainer>
  )
}
