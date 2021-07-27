import type {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'
import Head from 'next/head'

import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

function App({Component, pageProps}: AppProps) {
  console.log('theme', theme)

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare."
        />
        <title>Hapu - Create your nanny shares</title>
        <meta property="og:title" content="apu - Create your nanny shares" />
        <meta
          property="og:description"
          content="Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare."
        />
        <meta property="og:image" content="/img/photos/local-nanny-share.png" />
        <meta property="og:url" content="https://localhost:3000" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="icon" type="image/png" href="/img/icon-512.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default App
