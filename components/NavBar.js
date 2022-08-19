import styled from 'styled-components'
import NavButton from './NavButton'

const NavContainer = styled.div`
  
`
const CreationContainer = styled.div`
  margin-top: 24px;
`

export default function NavBar() {
  return (
    <NavContainer>
      <NavButton 
          label="Accueil"
          link="/"
          imageSrc="/sideBar_logos/house.svg"
          imageAlt="download"
      />
      <NavButton 
        label="Rechercher"
        link="/"
        imageSrc="/sideBar_logos/search.svg"
        imageAlt="download"
      />
      <NavButton 
        label="Bibliothèque"
        link="/"
        imageSrc="/sideBar_logos/books.svg"
        imageAlt="download"
      />
    </NavContainer>
  )
}
