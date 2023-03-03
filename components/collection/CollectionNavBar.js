import styled from 'styled-components'
import { useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import CollectionNavButton from './CollectionNavButton'

const Container = styled.nav`
  padding-left: 32px;
  background: #121212;
  position: sticky;
  top: 0;
  z-index: 10;
`
const NavContainer = styled.ul`
  height: 64px;
  display: flex;
  align-items: center;
  list-style: none;
`
const CollectionButtonContainer = styled.li`
  margin-right: 8px;
`

export default function CollectionNavBar() {

  const router = useRouter()

  const collectionPageName = router.pathname.split('/')[2] ?? 'playlists'

  const buttonNames = ['Playlists', 'Podcasts', 'Artistes', 'Albums']
  const pageNames = ['playlists', 'podcasts', 'artists', 'albums']

  return (
    <Container>
      <NavContainer>
        {buttonNames.map((buttonName, index) => (
          <CollectionButtonContainer key={index}>
            <CollectionNavButton
              buttonName={buttonName}
              pageName={pageNames[index]}
              isSelected={collectionPageName === pageNames[index]}
            />
          </CollectionButtonContainer>
        ))}
      </NavContainer>
    </Container>
  )
}