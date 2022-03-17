import '../styles/globals.css'
import '../styles/general-sans.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  
  return <> <Head>
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
              <link rel="manifest" href="/site.webmanifest"/>
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8247e5"/>
              <meta name="msapplication-TileColor" content="#dcd4ff"/>
              <meta name="theme-color" content="#ffffff"></meta>
            </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
