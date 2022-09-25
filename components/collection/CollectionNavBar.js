import styled from 'styled-components'
import { useState } from 'react'
import CollectionNavButton from './CollectionNavButton'

const Container = styled.nav`
  padding-left: 32px;
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

  const [collectionPageName, setCollectionPageName] = useState('playlists')

  const buttonNames = ['Playlists', 'Podcasts', 'Artistes', 'Albums']
  const pageNames = ['playlists', 'podcasts', 'artists', 'albums']

  return (
    <Container>
      <NavContainer>
        {buttonNames.map((buttonName, index) => (
          <CollectionButtonContainer key={index}>
            <CollectionNavButton
              buttonName={buttonName}
              collectionPageName={collectionPageName}
              setCollectionPageName={setCollectionPageName}
              pageName={pageNames[index]}
            />
          </CollectionButtonContainer>
        ))}
      </NavContainer>
    </Container>
  )
}
