import styled from "styled-components"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"

export default function Tracks() {
  return (
    <div>Tracks</div>
  )
}

Tracks.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>
