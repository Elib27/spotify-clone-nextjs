import styled from 'styled-components'

const Container = styled.main`
  width: 100%;
  padding: 24px 16px 32px 32px;
`

export default function PageContainer({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}
