import styled from "styled-components"

const Title = styled.h2`  
  color: #fff;
  font-size: 2em;
  line-height: 1em;
  font-weight: 700;
  margin-bottom: 21.5px;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
`

function WelcomeMessage() {

  function getWelcomeMessage() {
    const timeInHours = new Date().getHours()
    if (timeInHours >= 4 && timeInHours < 18) {
      return "Bonjour"
    }
    else {
      return "Bonsoir"
    }
  }

  const welcomeMessage = getWelcomeMessage() || 'Bonjour'

  return (
    <Title>{welcomeMessage}</Title>
  )
}

export default WelcomeMessage