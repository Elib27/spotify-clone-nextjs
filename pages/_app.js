import '../styles/globals.css'
import MainLayout from '../components/shared/MainLayout'
import Authentication from '../components/auth/Authentication'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <Authentication setIsAuthenticated={setIsAuthenticated} />
  }

  return (
    <Provider store={store}>
      <MainLayout>
        {getLayout(<Component {...pageProps} />)}
      </MainLayout>
    </Provider>
  )
}

export default MyApp
