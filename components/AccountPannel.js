import styled from "styled-components"
import Image from "next/image"
import Link from 'next/link'

const PannelContainer = styled.div`
  width: 208px;
  max-height: calc(100vh - 24px);
  background-color: #282828;
  color: #b3b3b3;
  position: absolute;
  top: 56px;
  right: 32px;
  border-radius: 4px;
  box-shadow: 0 16px 24px rgba(0,0,0,.3),0 6px 8px rgba(0,0,0,.2);
  -webkit-box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  z-index: 9999;
`
const AccountMenu = styled.ul`
  height: 100%;
  width: 100%;
  padding: 4px;
  list-style: none;
  & li:last-child {
    border-top: 1px solid #3e3e3e;
  }
`
const ButtonLabel = styled.span`
  width: 100%;
  text-align: left;
`
const OulinkLogoContainer = styled.div`
  opacity: 0.9;
`
const MenuButton = styled.button`
  box-sizing: padding-box;
  height: 44px;
  width: 100%;
  border-radius: 2px;
  padding: 12px 8px 12px 12px;
  background-color: transparent;
  border: 0;
  color: #e7e7e7;
  &:hover {
    background-color: #3e3e3e;
    ${ButtonLabel} {
      color: #fff;
    }
    ${OulinkLogoContainer} {
      opacity: 1;
    }
  }
`
const ExtendedMenuButton = styled(MenuButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function AccountPannel() {
  return (
    <PannelContainer>
      <AccountMenu>
        <li>
          <Link href="https://www.spotify.com/fr/account/overview">
            <ExtendedMenuButton>
              <ButtonLabel>Compte</ButtonLabel>
              <OulinkLogoContainer>
                <Image className="outlinklogo" src="/header_logos/out_link.svg" alt="out link logo" width={16} height={16} />
              </OulinkLogoContainer>
            </ExtendedMenuButton>
          </Link>
        </li>
        <li>
          <Link href="https://www.spotify.com/fr/premium/">
            <ExtendedMenuButton>
              <ButtonLabel>Compte</ButtonLabel>
              <OulinkLogoContainer>
                <Image className="outlinklogo" src="/header_logos/out_link.svg" alt="out link logo" width={16} height={16} />
              </OulinkLogoContainer>
            </ExtendedMenuButton>
          </Link>
        </li>
      </AccountMenu>
    </PannelContainer>
  )
}
