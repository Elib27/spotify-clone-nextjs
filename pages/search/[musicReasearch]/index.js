import styled from "styled-components"
import { useRouter } from "next/router"
import CategoryFilterBar from "../../../components/searchPage/CategoryFilterBar"
import SearchResults from "../../../components/searchPage/SearchResults"

const SearchPageContainer = styled.div`
  width: 100%;
  padding: 24px 24px 24px 32px;
`

export default function SearchResult() {

  const router = useRouter()
  const { musicResearch } = router.query

  return (
    <>
      <CategoryFilterBar />
      <SearchPageContainer>
        <SearchResults musicResearch={musicResearch}/>
      </SearchPageContainer>
    </>
  )
}