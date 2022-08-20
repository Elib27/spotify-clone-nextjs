import styled from "styled-components"
import CreationButton from "./CreationButton"

const CreationBarContainer = styled.div`
  margin-top: 24px;
`

export default function CreationBar() {
  return (
    <CreationBarContainer>
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
    </CreationBarContainer>
  )
}
