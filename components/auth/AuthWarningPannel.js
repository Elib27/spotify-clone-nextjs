import styled from 'styled-components'
import { useState } from "react"

const BackgroundShadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.6;
  z-index: 1;
`
const Pannel = styled.div`
  width: min(80%, 50rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #121212;
  border-radius: 1rem;
  padding: 2.4rem;
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CloseButton = styled.button`
  background-color: #1ed760;
  color: #000;
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 2rem;
  cursor: pointer;
  border: none;
  padding: 0.5rem 1.4rem;
  border-radius: 3rem;
`
const Title = styled.h2`
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
`
const Description = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-top: 20px;
  text-align: center;
`

export default function AuthWarningPannel() {

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null

  return (
    <>
      <Pannel>
        <Title>Warning: You need to be white-listed</Title>
        <Description>
          Spotify Application in developer mode now needs a white list to work.
          If you want to test this application, please contact me at <u><a href="mailto:eliot.bas@orange.fr">eliot.bas@orange.fr</a></u> so I can add you to the white list.
          Please provide your <u>full name</u> and your <u>Spotify account email</u>.
          Once you are white-listed, you will be able to connect to this app with your Spotify account.
        </Description>
        <CloseButton onClick={() => setIsVisible(false)}>Close</CloseButton>
      </Pannel>
      <BackgroundShadow onClick={() => setIsVisible(false)} />
    </>
  )
}
