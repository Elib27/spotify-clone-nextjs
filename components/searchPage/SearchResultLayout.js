import styled from "styled-components"
import CategoryFilterBar from "./CategoryFilterBar"

const SearchPageContainer = styled.div`
  width: 100%;
  padding: 24px 24px 24px 32px;
`

export default function SearchResultLayout({ children }) {
  return (
    <>
      <CategoryFilterBar />
      <SearchPageContainer>
        {children}
      </SearchPageContainer>
    </>
  )
}
