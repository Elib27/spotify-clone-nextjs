import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

const LinkLabel = styled.p`
  font-size: 14px;
  margin-left: 16px;
  color: #b3b3b3;
  font-weight: 600;
  transition: color 0.3s ease-out;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const CreationLinkButton = styled.button`
  height: 40px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  &:hover ${LinkLabel}{
    color: #fff;
  } 
  & .button-logo:hover {
    color: #fff;
  }
`
const LogoContainer = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export default function CreationButton({ label, link, imageSrc, imageAlt, backgroundColor}) {
  return (
    <Link href={link}>
      <CreationLinkButton>
        <LogoContainer>
          <Image className="button-logo" src={imageSrc} alt={imageAlt} width={12} height={12} />
        </LogoContainer>
        <LinkLabel>{label}</LinkLabel>
      </CreationLinkButton>
    </Link>
  )
}
