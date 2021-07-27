import type {AppProps} from 'next/app'
import Head from 'next/head'

import {GlobalStyles} from 'styles/global'

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare."
        />
        <title>Hapu - Create your nanny shares</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
export default App
