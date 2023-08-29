import '@/styles/globals.css'
import MainLayout from '@/components/shared/MainLayout'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {

  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>)

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
