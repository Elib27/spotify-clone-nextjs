import styled from 'styled-components'
import Image from 'next/image'
import Logo from '../public/spotify_logo.svg'

const Container = styled.div`
  height: 100vh;
  width: 241px;
  padding-top: 24px;
  background-color: #000;
`

export default function Navbar() {
  return (
    <Container>
      <Image src={Logo} alt="logo" width={131} height={40} />
    </Container>
  )
}
