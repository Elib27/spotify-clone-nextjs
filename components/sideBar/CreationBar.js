import { useRouter } from "next/router"
import NavButton from "./NavButton"
import CreationButton from "./CreationButton"

const pagesWhereFullBooks = [
  "/collection/playlists",
  "/collection/podcasts",
  "/collection/artists",
  "/collection/albums",
]

export default function CreationBar() {

  const router = useRouter()

  return (
    <div>
      <NavButton 
        label="Bibliothèque"
        link="/collection/playlists"
        imageSrc="/sideBar_logos/books.svg"
        imageSrcSelected="/sideBar_logos/books_full.svg"
        imageAlt="library link button"
        isActive={pagesWhereFullBooks.includes(router.pathname)}
      />
      <CreationButton 
        label="Créer une playlist"
        link="/playlist/67576ghjgjHG876JHJH6"
        imageSrc="/sideBar_Logos/cross.svg"
        imageAlt="logo créer une playlist"
        logoBackground="#fff"
      />
      <CreationButton 
        label="Titres likés"
        link="/collection/tracks"
        imageSrc="/sideBar_Logos/heart.svg"
        imageAlt="logo coeur titres likés"
        logoBackground="linear-gradient(135deg,#450af5,#c4efd9)"
      />
      <CreationButton
        label="Vos épisodes"
        link="/collection/episodes"
        imageSrc="/sideBar_Logos/favorite.svg"
        imageAlt="logo favoris vos épisodes"
        logoBackground="#006450"
      />
    </div>
  )
}
