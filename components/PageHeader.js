import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"
import Pannel from "./AccountPannel"

const HeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  background-color: #0ff0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  position: sticky;
  top: 0;
  z-index: 10;
`
const LeftContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: nowrap;
`
const NavigationButton = styled.button`
  height: 32px;
  width: 32px;
  background-color: rgba(0,0,0,0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  ${({ disabled }) => disabled && `
    opacity: 0.6;
    cursor: not-allowed;
  `}
`
const RightContainer = styled.div`
  display:flex;
  gap: 16px;
`
const SubscribeButton = styled.button`
  font-size: 0.875rem;
  font-weight: 700;
  outline: none;
  background-color: transparent;
  border: 1px solid #727272;
  color: #fff;
  border-radius: 50px;
  user-select: none;
  padding: 3px 15px;
  &:hover {
    transform: scale(1.04);
    border-color: #fff;
  }
`
const AccountButton = styled.button`
  background-color: #000;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 28px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #282828;
  }
`
const AccountImage = styled.div`
  height: 28px;
  width: 28px;
  background-color: #535353;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const AccountImageContainer = styled.figure`
  padding-bottom: 1px;
`
const Username = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  max-width: 110px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const TriangleLogoContainer = styled.div`
  margin-right: 6px;
`

const user = 'eliot';


export default function PageHeader() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <Link href="/">
          <NavigationButton>
            <Image src="/header_logos/left_arrow.svg" alt="return button" width={22} height={22} />
          </NavigationButton>
        </Link>
        <Link href="/">
          <NavigationButton disabled>
            <Image src="/header_logos/right_arrow.svg" alt="forward button" width={22} height={22} />
          </NavigationButton>
        </Link>
      </LeftContainer>
      <RightContainer>
        <SubscribeButton>S&apos;abonner</SubscribeButton>
        <AccountButton>
          <AccountImage>
            <AccountImageContainer>
              <Image src="/header_logos/default_avatar.svg" alt="account button" width={16} height={16} />
            </AccountImageContainer>
          </AccountImage>
          <Username>{user}</Username>
          <TriangleLogoContainer>
            <Image src="/header_logos/triangle.svg" alt="toogle menu logo" width={16} height={16} />
          </TriangleLogoContainer>
        </AccountButton>
      </RightContainer>
      <Pannel />
    </HeaderContainer>
  )
}
