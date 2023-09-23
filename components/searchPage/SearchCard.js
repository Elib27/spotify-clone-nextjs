import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${({ $cardBackgroundColor }) => $cardBackgroundColor};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`
const CardTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: -0.06rem;
  font-weight: 700;
  user-select: none;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
  z-index: 1;
`
const CardImage = styled.div`
  pointer-events: none;
  user-select: none;
  z-index: 0;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  transform: rotate(25deg) translate(18%,-2%);
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100px;
  width: 100px;
  img {
    object-fit: cover;
  }
`

export default function SearchCard({ title, cardBackgroundColor, imageSrc }) {
  return (
    <Container
      $cardBackgroundColor={cardBackgroundColor}
    >
      <CardTitle>
        {title}
      </CardTitle>
      <CardImage>
        <Image src={imageSrc} sizes="10vw" alt={title} fill />
      </CardImage>
    </Container>
  )
}
