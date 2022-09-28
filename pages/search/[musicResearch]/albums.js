import styled from "styled-components"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"

export default function Albums() {
  return (
    <div>albums</div>
  )
}

Albums.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>

