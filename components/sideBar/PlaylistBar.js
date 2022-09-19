import styled from "styled-components"
import PlaylistButton from "./PlaylistButton"

const PlaylistContainer = styled.div`
  padding: 8px 0;
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
        <PlaylistButton
          name={playlist.name}
          id={playlist.id}
          key={playlist.id}
        />
      ))}
    </PlaylistContainer>
  )
}
