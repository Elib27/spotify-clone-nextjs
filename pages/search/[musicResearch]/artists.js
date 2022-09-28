import styled from "styled-components"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"

export default function Artists() {
  return (
    <div>Artists</div>
  )
}

Artists.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>
