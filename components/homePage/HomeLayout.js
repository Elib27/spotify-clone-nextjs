import PageContainer from '@/components/shared/PageContainer'
import WelcomeMessage from './WelcomeMessage'
import HomeShorcuts from './HomeShorcuts'

function HomeLayout({ children }) {

  return (
    <PageContainer>
      <WelcomeMessage />
      <HomeShorcuts />
      {children}
    </PageContainer>
  )
}

export default HomeLayout