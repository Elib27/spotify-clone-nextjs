import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const CardContainer = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #181818;
  position: relative;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #262626;
  }
`
const CardImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 16px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`
const CardTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 4px;
  line-height: 1.6;
`
const CardSubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: #a7a7a7;
  line-height: 1.6;
  padding-bottom: 8px;
`

export default function HomeCard({cover_url, title, artist}) {
  return (
    <CardContainer>
      <CardImageContainer>
        <Image src={cover_url} alt="song cover" layout="fill"/>
      </CardImageContainer>
      <CardTitle>{title}</CardTitle>
      <CardSubTitle>{artist}</CardSubTitle>
    </CardContainer>
  )
}
