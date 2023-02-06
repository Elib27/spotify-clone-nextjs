import styled from "styled-components"
import { useSession } from "next-auth/react"

const Title = styled.h2`  
  color: #fff;
  font-size: 2em;
  line-height: 1em;
  font-weight: 700;
  margin-bottom: 21.5px;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
`

function WelcomeMessage() {

  const { data: session, status } = useSession()

  function getWelcomeMessage() {
    const timeInHours = new Date().getHours()
    if (timeInHours >= 4 && timeInHours < 18) {
      return "Bonjour"
    }
    else {
      return "Bonsoir"
    }
  }

  let welcomeMessage = getWelcomeMessage() || 'Bonjour'

  if (status === "authenticated")
    welcomeMessage += ` ${session.user.name}`
  else
    welcomeMessage += ", connecte toi !"

  return (
    <Title>{welcomeMessage}</Title>
  )
}

export default WelcomeMessage