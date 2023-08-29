import '@/styles/globals.css'
import MainLayout from '@/components/shared/MainLayout'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {

  const [queryClient] = useState(() => new QueryClient())

  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>)

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
