import styled from 'styled-components'

const Container = styled.main`
  width: 100%;
  padding: 24px;
  max-width: 1955px;
`

export default function PageContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
