import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
  ${({ isBigCard }) => isBigCard ?
  `height: 220px;
   width: clamp(340px, 50%, 480px);
   flex-shrink: 0;
   `
   : 
   `width: 100%;
    aspect-ratio: 1;`
  }
  background-color: ${({cardBackgroundColor}) => cardBackgroundColor};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`
const CardTitle = styled.h3`
  ${({ isBigCard }) => isBigCard ? 'font-size: 2.5rem;' : 'font-size: 1.5rem;'}
  letter-spacing: -0.04rem;
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
  ${({ isBigCard }) => isBigCard ?
    `
      height: 128px;
      width: 128px;
    `
    :
    `
    height: 100px;
    width: 100px;
    `
  }
`

export default function SearchCard({title, cardBackgroundColor, isBigCard, imageSrc}) {
  return (
    <Container
      isBigCard={isBigCard}
      cardBackgroundColor={cardBackgroundColor}
    >
      <CardTitle isBigCard={isBigCard}>
        {title}
      </CardTitle>
      <CardImage isBigCard={isBigCard}>
        <Image src={imageSrc} alt={title} layout="fill"/>
      </CardImage>
    </Container>
  )
}
