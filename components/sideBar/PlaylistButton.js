import styled from "styled-components"
import { useRouter } from "next/router"
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

  const router = useRouter()
  return (
    <Link href={`/playlist/${id}`}>
      <Button>
        <PlaylistLabel
          isSelected={router.asPath === `/playlist/${id}`}
        >
          {name}
        </PlaylistLabel>
      </Button>
    </Link>
  )
}
