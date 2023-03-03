import styled from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

const LinkLabel = styled.p`
  font-size: 0.875rem;
  margin-left: 16px;
  width: 100%;
  text-align: left;
  line-height: 1.6;
  color: #b3b3b3;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ isSelected }) => isSelected && `
    color: #fff;
  `}
`
const LogoContainer = styled.div`
  opacity: 0.7;
  height: 24px;
  flex-shrink: 0;
  transition: opacity 0.3s ease-in-out;
  ${({ isSelected }) => isSelected && `
    opacity: 1;
  `}
`
const NavLinkButton = styled.div`
  height: 40px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  &:hover ${LinkLabel}{
    color: #fff;
  }
  &:hover ${LogoContainer}{
    opacity: 1;
  }
`

export default function DownloadButton() {

  const router = useRouter()

  return (
    <Link href="/download">
      <NavLinkButton>
        <LogoContainer isSelected={router.asPath === "/download"}>
            <Image src="/sideBar_logos/download.svg" alt="download button" width={24} height={24} />
        </LogoContainer>
        <LinkLabel
          isSelected={router.asPath === "/download"}
        >
          Installer l&apos;appli
        </LinkLabel>
      </NavLinkButton>
    </Link>
  )
}
