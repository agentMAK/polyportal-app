import '../styles/globals.css'
import '../styles/general-sans.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import useHotjar from 'react-use-hotjar';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

const myCustomLogger = console.info;

function MyApp({ Component,   pageProps: { session, ...pageProps }, }: AppProps) {
  const { initHotjar } = useHotjar();

  React.useEffect(() => {
    initHotjar(2863979, 6, false);
  }, [initHotjar]);

  return (
  <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </SessionProvider>
    )
  
}

export default MyApp
