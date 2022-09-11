import styled from 'styled-components'
import { useState } from 'react'
import CollectionNavButton from './CollectionNavButton'

const Container = styled.nav`
  padding-left: 24px;
`

const NavContainer = styled.ul`
  display: flex;
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
