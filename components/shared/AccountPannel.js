import styled from "styled-components"
import Link from 'next/link'
import Image from "next/image"

const PannelContainer = styled.div`
  width: 196px;
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
  font-size: 0.875rem;
  font-weight: 400;
  text-align: left;
  display: inline-block;
`
const OutlinkLogoContainer = styled.div`
  opacity: 0.9;
`
const MenuButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 2px;
  padding: 12px 8px 12px 12px;
  background-color: transparent;
  border: 0;
  color: #e7e7e7;
  position: relative;
  &:hover {
    background-color: #3e3e3e;
    ${ButtonLabel} {
      color: #fff;
    }
    ${OutlinkLogoContainer} {
      opacity: 1;
    }
  }
`
const ExtendedMenuButton = styled(MenuButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ExternalLink = styled.a`
  text-decoration: none;
`

export default function AccountPannel() {
  return (
    <PannelContainer>
      <AccountMenu>
        <li>
          <ExternalLink href="https://www.spotify.com/fr/account/overview" target="_blank" rel="noreferrer">
            <ExtendedMenuButton>
              <ButtonLabel>Compte</ButtonLabel>
              <OutlinkLogoContainer>
                <Image className="outlinklogo" src="/header_logos/out_link.svg" alt="out link logo" width={16} height={16} />
              </OutlinkLogoContainer>
            </ExtendedMenuButton>
          </ExternalLink>
        </li>
        <li>
          <Link href="https://www.spotify.com/fr/premium/" target="_blank" rel="noreferrer">
            <MenuButton>
              <ButtonLabel>Profil</ButtonLabel>
            </MenuButton>
          </Link>
        </li> 
        <li>
          <ExternalLink href="https://www.spotify.com/fr/premium/" target="_blank" rel="noreferrer">
            <ExtendedMenuButton>
              <ButtonLabel>Passer à Premium</ButtonLabel>
              <OutlinkLogoContainer>
                <Image className="outlinklogo" src="/header_logos/out_link.svg" alt="out link logo" width={16} height={16} />
              </OutlinkLogoContainer>
            </ExtendedMenuButton>
          </ExternalLink>
        </li>
        <li>
          <Link href="https://www.spotify.com/fr/premium/" target="_blank" rel="noreferrer">
            <MenuButton>
              <ButtonLabel>Préférences</ButtonLabel>
            </MenuButton>
          </Link>
        </li>
        <li>
          <Link href="https://www.spotify.com/fr/premium/" target="_blank" rel="noreferrer">
            <MenuButton>
              <ButtonLabel>Déconnexion</ButtonLabel>
            </MenuButton>
          </Link>
        </li> 
      </AccountMenu>
    </PannelContainer>
  )
}
