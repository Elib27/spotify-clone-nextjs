import styled from "styled-components"
import { useSelector } from "react-redux"
import Link from "next/link"

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
const Button = styled.button`
  height: 32px;
  width: 100%;
  padding: 0 16px;
  border: 0;
  background-color: transparent;
  &:hover ${PlaylistLabel}{
    color: #fff;
  }
`

export default function PlaylistButton({ name, id }) {

  const navigation = useSelector(state => state.navigation)

  return (
    <Link href={`/playlist/${id}`}>
      <Button>
        <PlaylistLabel
          isSelected={navigation.currentPage === `/playlist/${id}`}
        >
          {name}
        </PlaylistLabel>
      </Button>
    </Link>
  )
}
