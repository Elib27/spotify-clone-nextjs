import '../styles/globals.css'
import MainLayout from '../components/shared/MainLayout'
import { Provider } from 'react-redux'
import { store } from '../store/store'

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || (children => <>{children}</>)

  return (
    <Provider store={store}>
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    </Provider>
  )
}

export default MyApp
