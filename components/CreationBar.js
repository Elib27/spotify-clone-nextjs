import styled from "styled-components"
import NavButton from "./NavButton"

const CreationBarContainer = styled.div`
  margin-top: 24px;
`

export default function CreationBar() {
  return (
    <CreationBarContainer>
      <NavButton 
        label="Créer une playlist"
        link="/playlist/67576ghjgjHG876JHJH6"
        imageSrc="/download.svg"
        imageAlt="logo créer une playlist"
      />
      <NavButton 
        label="Titres likés"
        link="/collection/tracks"
        imageSrc="/download.svg"
        imageAlt="logo coeur titres likés"
      />
      <NavButton 
        label="Vos épisodes"
        link="/collection/episodes"
        imageSrc="/download.svg"
        imageAlt="logo favoris vos épisodes"
      />
    </CreationBarContainer>
  )
}
