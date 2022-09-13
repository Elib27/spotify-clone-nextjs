import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
  height: 56px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 16px 6fr 4fr 3fr minmax(120px, 1fr);
  grid-gap: 16px;
  border-bottom: 1px solid transparent;
  border-radius: 4px;
  position: relative;
`
const NumberRow = styled.div`
  display: flex;
  align-items: center;;
  justify-content: end;
`
const Number = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #b3b3b3;
`
const TitleRow = styled.div`

`
const TracksCover = styled.div`

`
const TracksInformations = styled.div`

`
const TrackTitle = styled.div`

`
const TrackInformationsBottom = styled.div`

`
const TrackArtist = styled.span`

`
const ExplicitLogo = styled.span`

`
const TrackAlbumRow = styled.div`

`
const TrackAlbum = styled.div`

`
const AddedDateRow = styled.div`

`
const AddedDate = styled.div`

`

export default function LikedTrack({ title, artist, album, cover_url, explicit, addedDate, duration, number}) {
  return (
    <Container>
      <NumberRow>
        <Number>{number}</Number>
      </NumberRow>
      <TitleRow>
        <TracksCover>
        <Image src={cover_url} width={40} height={40} alt="album cover"/>
        </TracksCover>
        <TracksInformations>
          <TrackTitle>{title}</TrackTitle>
          <TrackInformationsBottom>
            {explicit && <ExplicitLogo>E</ExplicitLogo>}
            <TrackArtist>{artist}</TrackArtist>
          </TrackInformationsBottom>
        </TracksInformations>
      </TitleRow>
      <TrackAlbumRow>
        <TrackAlbum>{album}</TrackAlbum>
      </TrackAlbumRow>
      <AddedDateRow>
        <AddedDate>{addedDate}</AddedDate>
      </AddedDateRow>
    </Container>
  )
}
