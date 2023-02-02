import '../styles/globals.css'
import MainLayout from '../components/shared/MainLayout'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import { store } from '../store/store'

function MyApp({
  Component,
  pageProps: {session, ...pageProps}
}) {

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <MainLayout>
          {getLayout(<Component {...pageProps} />)}
        </MainLayout>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
