import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { changeCurrentPage } from "../../store/store"
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
  transition: color 0.3s ease-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ isSelected }) => isSelected && `color: #fff;`}
`
const NavLinkButton = styled.button`
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
`
const LogoContainer = styled.div`
  opacity: 0.7;
  height: 24px;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
  }
`

export default function NavButton({ label, link, imageSrc, imageSrcSelected, imageAlt, name}) {

  const navigation = useSelector(state => state.navigation)
  const dispatch = useDispatch()

  function handleClickUpdateCurrentPage() {
    dispatch(changeCurrentPage(name))
  }

  return (
    <Link href={link}>
      <NavLinkButton onClick={handleClickUpdateCurrentPage}>
        <LogoContainer>
          {navigation.currentPage === name ? (
            <Image src={imageSrcSelected} alt={imageAlt} width={24} height={24} />
          ) : (
            <Image src={imageSrc} alt={imageAlt} width={24} height={24} />
          )}
        </LogoContainer>
        <LinkLabel
          isSelected={navigation.currentPage === name}
        >
          {label}
        </LinkLabel>
      </NavLinkButton>
    </Link>
  )
}
