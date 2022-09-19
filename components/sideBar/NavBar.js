import styled from 'styled-components'
import NavButton from './NavButton'

const NavContainer = styled.div`
  
`
export default function NavBar() {
  return (
    <NavContainer>
      <NavButton 
        label="Accueil"
        link="/"
        imageSrc="/sideBar_logos/house.svg"
        imageSrcSelected="/sideBar_logos/house_full.svg"
        imageAlt="home link button"
      />
      <NavButton 
        label="Rechercher"
        link="/search"
        imageSrc="/sideBar_logos/search.svg"
        imageSrcSelected="/sideBar_logos/search_full.svg"
        imageAlt="search page link button"
      />
      <NavButton 
        label="Bibliothèque"
        link="/collection/playlists"
        imageSrc="/sideBar_logos/books.svg"
        imageSrcSelected="/sideBar_logos/books_full.svg"
        imageAlt="library link button"
      />
    </NavContainer>
  )
}
