import { useEffect, useState } from "react"
import styled from "styled-components"
import PlaylistHeader from "../../components/shared/PlayListHeader"
import LikedPodcast from "../../components/collection/LikedPodcast"
import PlaylistPlayButtonSection from "../../components/shared/PlaylistPlayButtonSection"

const Container = styled.div`
  padding-bottom: 32px;
`
const MainContentWrapper = styled.div`
  position: relative;
  z-index: 0;
`
const BackgroundGradient = styled.div`
  height: 232px;
  width: 100%;
  background-color: rgb(0, 100, 80);
  background-image: linear-gradient(rgba(0,0,0,.6), #121212), url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=");
  position: absolute;
  z-index: -1;
  pointer-events: none;
`
const PlayMusicSection = styled.section`
  padding: 24px 32px;
`
const PlayButton = styled.div`
  height: 56px;
  width: 56px;
  background-color: #1ed760;
  border-radius: 50%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  &:hover {
    transform: scale(1.04);
  }
`
const PodcastsContainer = styled.section`
  padding: 0 16px;
  max-width: 967px;
`
const Separator = styled.hr`
  border-color: #ffffff1a;
  height: 2px;
  margin: 0 16px;
`
const Wrapper = styled.div`
  position: relative;
  &:hover {
    ${Separator} {
      opacity: 0;
    }
    & + div ${Separator}{
      opacity: 0;
    }
  }
`

export default function Episodes() {

  const [savedEpisodes, setSavedEpisodes] = useState(null)

  async function getSavedEpisodes() {
    const response = await fetch('/api/getSavedEpisodes')
    const data = await response.json()
    setSavedEpisodes(data)
  }

  useEffect(() => {
    getSavedEpisodes()
  }, [])

  if (!savedEpisodes) return

  return (
    <Container>
      <PlaylistHeader
        title="Vos épisodes"
        background="linear-gradient(#056753 0, #023329 100%)"
        owner="eliot"
        tracks_number={savedEpisodes.length}
        isEpisodesCollection
        />
      <MainContentWrapper>
        <BackgroundGradient />
        <PlaylistPlayButtonSection />
        <PodcastsContainer>
          {savedEpisodes.map(episode => (
            <Wrapper key={episode.id}>
              <Separator />
              <LikedPodcast
                title={episode.name}
                description={episode.description}
                podcast={episode.podcast}
                cover_url={episode.image}
                date={episode.release_date}
                duration={episode.duration}
                />
            </Wrapper>
          ))}
        </PodcastsContainer>
      </MainContentWrapper>
    </Container>
  )
}