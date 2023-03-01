import styled from "styled-components"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

const LinkLabel = styled.p`
  font-size: 0.875rem;
  margin-left: 16px;
  color: ${({ active }) => active ? "#fff" : '#b3b3b3'};
  font-weight: 700;
  width: 100%;
  text-align: left;
  transition: color 0.3s ease-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ isSelected }) => isSelected && `color: #fff;`}
`
const LogoContainer = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2px;
  background: ${({ logoBackground }) => logoBackground};
  opacity: ${({ active }) => active ? 1 : 0.7};
  transition: opacity 0.3s ease-out;
  ${({ isSelected }) => isSelected && `opacity: 1;`}
`
const CreationLinkButton = styled.button`
  height: 40px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover ${LinkLabel}{
    color: #fff;
  } 
  &:hover ${LogoContainer} {
    opacity: 1;
  }
`

export default function CreationButton({ label, link, imageSrc, imageAlt, logoBackground }) {

  const router = useRouter()

  return (
    <Link href={link ?? '/'}>
      <CreationLinkButton>
        <LogoContainer
          logoBackground={logoBackground}
          isSelected={router.asPath === link}
        >
          <Image src={imageSrc} alt={imageAlt} width={12} height={12} />
        </LogoContainer>
        <LinkLabel
          isSelected={router.asPath === link}
        >
          {label}
        </LinkLabel>
      </CreationLinkButton>
    </Link>
  )
}
