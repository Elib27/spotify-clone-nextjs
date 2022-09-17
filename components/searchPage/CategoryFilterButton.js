import styled from "styled-components"

const FilterButtonWrapper = styled.div`
  padding: 2px;
  flex-shrink: 0;
`
const FilterButton = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  padding: 4px 12px;
  color: #fff;
  border-radius: 50px;
  border: none;
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

export default function CategoryFilterButton({title, isSelected}) {
  return (
    <FilterButtonWrapper>
      <FilterButton isSelected={isSelected}>
        {title}
      </FilterButton>
    </FilterButtonWrapper>
  )
}
