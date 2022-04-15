import '../styles/globals.css'
import '../styles/general-sans.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import useHotjar from 'react-use-hotjar';
import React from 'react';

const myCustomLogger = console.info;

function MyApp({ Component, pageProps }: AppProps) {
  const { initHotjar } = useHotjar();

  React.useEffect(() => {
    initHotjar(2863979, 6, false, myCustomLogger);
  }, [initHotjar]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
  
}

export default MyApp
