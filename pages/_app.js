import '../styles/globals.css'
import MainLayout from '../components/shared/MainLayout'
import { Provider } from 'react-redux'
import { store } from '../store/store'

function MyApp({ Component, pageProps }) {

  const Layout = ({ Component, pageProps }) => {
    if (Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />);
    } else {
      return <Component {...pageProps} />;
    }
  };

  return (
    <Provider store={store}>
      <MainLayout>
        <Layout Component={Component} pageProps={pageProps} />
      </MainLayout>
    </Provider>
  )
}

export default MyApp
