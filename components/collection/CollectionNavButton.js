import styled from 'styled-components'
import Link from 'next/link'

const NavButton = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: #fff;
  border-radius: 4px;
  padding: 11.5px 16px;
  line-height: 1.6;
  cursor: pointer;
  ${({ $isSelected }) => $isSelected ? `
    background-color: #333;
    ` : `
    background-color: transparent;
  `}
`

export default function CollectionNavButton({ buttonName, pageName, isSelected }) {

  return (
    <Link href={pageName}>
      <NavButton $isSelected={isSelected}>
        {buttonName}
      </NavButton>
    </Link>
  )
}
