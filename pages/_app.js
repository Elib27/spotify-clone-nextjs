import '../styles/globals.css'
import MainLayout from '../components/shared/MainLayout'
import { Provider } from 'react-redux'
import { store } from '../store/store'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      <MainLayout>
        {getLayout(<Component {...pageProps} />)}
      </MainLayout>
    </Provider>
  )
}

export default MyApp
