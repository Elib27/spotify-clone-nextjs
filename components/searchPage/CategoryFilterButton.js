import styled from "styled-components"
import Link from 'next/link'

const FilterButtonWrapper = styled.div`
  padding: 2px;
  flex-shrink: 0;
`
const FilterButton = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  white-space: nowrap;
  padding: 4px 12px;
  color: #fff;
  border-radius: 50px;
  background-color: #232323;
  transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
  line-height: 1.72;
  ${({isSelected}) => isSelected ? `
    background-color: #fff;
    color: #000;
  ` : `
    &:hover {
      background-color: #2a2a2a;
    }
  `}
`

export default function CategoryFilterButton({title, link, isSelected}) {

  return (
    <Link href={link}>
      <FilterButtonWrapper>
        <FilterButton isSelected={isSelected}>
          {title}
        </FilterButton>
      </FilterButtonWrapper>
    </Link>
  )
}
