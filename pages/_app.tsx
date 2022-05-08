import '../styles/globals.css'
import '../styles/general-sans.css'
import type { AppProps } from 'next/app'
import Layout from '../components/header/Layout'
import React from 'react';

function MyApp({ Component,   pageProps: { session, ...pageProps }, }: AppProps) {
  
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  
}

export default MyApp
