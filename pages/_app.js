import '@/styles/globals.css'
import MainLayout from '@/components/shared/MainLayout'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {

  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>)

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
