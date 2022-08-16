import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'

const Title = styled.h1`
  color: blue;
`

export default function Home() {
  return (
    <Title>HOME PAGE</Title>
  )
}
