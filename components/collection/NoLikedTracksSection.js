import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  color: #fff;
  padding-top: 64px;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  line-height: 1.6;
  margin: 20px 0 8px 0;
`
const SubTitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 32px;
`
const SearchTracksLink = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  background-color: #f6f6f6;
  border-radius: 50px;
  padding: 13px 32px;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
`

export default function NoLikedTracksSection() {
  return (
    <Container>
      <Image src="/tracks_logos/music_note.svg" width={64} height={64} alt="music note"/>
      <Title>Les titres que vous likez apparaissent ici</Title>
      <SubTitle>Sauvegardez des titres en appuyant sur l&apos;icône de cœur.</SubTitle>
      <Link href="/search">
        <SearchTracksLink>Rechercher des titres</SearchTracksLink>
      </Link>
    </Container>
  )
}
