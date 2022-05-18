import '../styles/globals.css'
import '../styles/general-sans.css'
import type { AppProps } from 'next/app'
import Layout from '../components/header/Layout'
import React from 'react';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component,   pageProps: { session, ...pageProps }, }: AppProps) {

  return (
  <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </SessionProvider>
    )
  
}

export default MyApp