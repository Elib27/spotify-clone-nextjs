import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='fr'>
        <Head>
          <title>Spotify Clone</title>
          <meta name='description' content='Spotify clone coded by BAS Eliot with Next JS.' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument