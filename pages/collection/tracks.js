import styled from 'styled-components'
import LikedTrack from '../../components/collection/LikedTrack'
import PlaylistHeader from '../../components/shared/PlayListHeader'
import NoLikedTracksSection from '../../components/collection/NoLikedTracksSection'
import PlayLogo from '../../public/tracks_logos/play_logo.svg'
import DurationLogo from '../../public/tracks_logos/time_logo.svg'

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
  background-color: rgb(80, 56, 160);
  background-image: linear-gradient(rgba(0,0,0,.6), #121212), url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=");
  position: absolute;
  z-index: -1;
  pointer-events: none;
`
const PlayMusicSection = styled.section`
  padding: 24px 32px;
  position: relative;
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
const TracksContainer = styled.section`
  margin: 0 16px 0 32px;
`
const TracksSectionRows = styled.div`
  height: 36px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 16px 6fr 4fr 3fr minmax(120px,1fr);
  grid-gap: 16px;
  border-bottom: 1px solid hsla(0,0%,100%,0.1);
  margin-bottom: 16px;
`
const TracksSectionRowTitle = styled.div`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #b3b3b3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:first-of-type {
    font-size: 1rem;
    justify-self: end;
    margin-right: -2px;
  }
  &:last-of-type{
    justify-self: end;
    margin-right: 32px;
  }
`

export default function Tracks() {
  return (
    <Container>
      <PlaylistHeader
        title="Titres likés"
        cover_url="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        background="linear-gradient(#5038a0 0, #291e50 100%)"
        owner="eliot"
        tracks_number={2}
        />
      <MainContentWrapper>
        <BackgroundGradient />
        {/* <NoLikedTracksSection /> */}
        <PlayMusicSection>
          <PlayButton>
            <PlayLogo />
          </PlayButton>
        </PlayMusicSection>
        <TracksContainer>
          <TracksSectionRows>
            <TracksSectionRowTitle>#</TracksSectionRowTitle>
            <TracksSectionRowTitle>TITRE</TracksSectionRowTitle>
            <TracksSectionRowTitle>ALBUM</TracksSectionRowTitle>
            <TracksSectionRowTitle>AJOUTÉ LE</TracksSectionRowTitle>  
            <TracksSectionRowTitle>
              <DurationLogo />
            </TracksSectionRowTitle>
          </TracksSectionRows>
          <LikedTrack
            title="Top album"
            artist="Mister V"
            album="Double V"
            cover_url="https://i.scdn.co/image/ab67616d000048513fa6647c6ba06e64e0f1ff47"
            explicit={true}
            addedDate={3}
            duration="3:12"
            number={1}
            />
          <LikedTrack
            title="Top album"
            artist="Mister V"
            album="Double V"
            cover_url="https://i.scdn.co/image/ab67616d000048513fa6647c6ba06e64e0f1ff47"
            explicit={false}
            addedDate={3}
            duration="3:12"
            number={2}
            />
          <LikedTrack
            title="Top album"
            artist="Mister V"
            album="Double V"
            cover_url="https://i.scdn.co/image/ab67616d000048513fa6647c6ba06e64e0f1ff47"
            explicit={true}
            addedDate={3}
            duration="3:12"
            number={3}
            />
          <LikedTrack
            title="Top album"
            artist="Mister V"
            album="Double V"
            cover_url="https://i.scdn.co/image/ab67616d000048513fa6647c6ba06e64e0f1ff47"
            explicit={false}
            addedDate={3}
            duration="3:12"
            number={4}
            />
        </TracksContainer>
      </MainContentWrapper>
    </Container>
  )
}
