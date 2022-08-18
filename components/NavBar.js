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
          imageSrc="/download.svg"
          imageAlt="download"
      />
      <NavButton 
        label="Rechercher"
        link="/"
        imageSrc="/download.svg"
        imageAlt="download"
      />
      <NavButton 
        label="Bibliothèque"
        link="/"
        imageSrc="/download.svg"
        imageAlt="download"
      />
    </NavContainer>
  )
}
