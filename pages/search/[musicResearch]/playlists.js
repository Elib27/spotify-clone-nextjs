import styled from "styled-components"
import SearchResultLayout from "../../../components/searchPage/SearchResultLayout"

export default function Playlists() {
  return (
    <div>playlists</div>
  )
}

Playlists.getLayout = page => <SearchResultLayout>{page}</SearchResultLayout>
