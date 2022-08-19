import styled from "styled-components"

const PlaylistContainer = styled.div`
  padding: 8px 0;
`
const PlaylistLabel = styled.p`
  font-size: 14px;
  margin:  0;
  color: #b3b3b3;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
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

const PlayLists = ['Ma playlist n°3', 'Ma playlist n°2', 'musique de soirée']

export default function PlaylistBar() {
  return (
    <PlaylistContainer>
      {PlayLists.map((playlist) => (
        <PlaylistButton key={playlist}>
          <PlaylistLabel>{playlist}</PlaylistLabel>
        </PlaylistButton>
      ))}
    </PlaylistContainer>
  )
}
