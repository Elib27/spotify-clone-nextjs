import styled from "styled-components"
import PlaylistHeader from "../shared/PlayListHeader"
import LikedTracksContainer from '../collection/LikedTracksContainer'

const MainContentWrapper = styled.div`
  position: relative;
  z-index: 0;
`
const BackgroundGradient = styled.div`
  height: 232px;
  width: 100%;
  background-color: rgb(80, 56, 160);
  background-image: linear-gradient(rgba(0,0,0,.6), #121212), url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=");
  position: absolute;
  z-index: -1;
  pointer-events: none;
`

function PlaylistPageLayout({ title, description, cover_url, background, tracks_number, children }) {
  return (
    <>
      <PlaylistHeader
        title={title}
        description={description}
        cover_url={cover_url}
        background={background}
        tracks_number={tracks_number}
      />
      <MainContentWrapper>
        <BackgroundGradient />
        {/* <LikedTracksContainer>
          {children}
        </LikedTracksContainer> */}
      </MainContentWrapper>
    </>
  )
}

export default PlaylistPageLayout