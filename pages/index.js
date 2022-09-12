import styled from 'styled-components'
import { useState, useLayoutEffect} from 'react'
import HomeShorcuts from '../components/HomeShorcuts'
import HomeSection from '../components/HomeSection'
import HomeCard from '../components/HomeCard'

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`
const Title = styled.h2`  
  color: #fff;
  font-size: 2em;
  line-height: 1em;
  font-weight: 700;
  margin-bottom: 21.5px;
`
const MoreContent = styled.div`
  height: 150vh;
`

export default function Home() {

  const [welcomeMessage, setWelcomeMessage] = useState('Bonjour')

  useLayoutEffect(() => {
    const timeInHours = new Date().getHours()
    if (timeInHours >= 4 && timeInHours <= 18) {
      setWelcomeMessage('Bonjour')
    }
    else {
      setWelcomeMessage('Bonsoir')
    }
  }, [])

  return (
    <HomeWrapper>
      <Title>{welcomeMessage}</Title>
      <HomeShorcuts />
      <HomeSection title="Vos émissions">
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
      </HomeSection>
      <HomeSection title="Vos émissions">
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
      </HomeSection>
    </HomeWrapper>
  )
}