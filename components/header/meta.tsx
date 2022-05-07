import Head from 'next/head'
import Script from 'next/script'
import polyportalLogo from '../../public/images/logo/polyportalName.svg'

const Meta = (props:any) => {
  return (
    <Head>

        {/* <!-- Primary Meta Tags --> */}
        <title>{props.title}</title>
        <meta name="title" content={props.title}/>
        <meta name="description" content={props.description}/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={props.title}/>
        <meta property="og:description" content={props.description}/>
        <meta property="og:image" content={polyportalLogo}/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content={props.title}/>
        <meta property="twitter:description" content={props.description}/>
        <meta property="twitter:image" content={polyportalLogo}/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8247e5"/>
        <meta name="msapplication-TileColor" content="#dcd4ff"/>
        <meta name="theme-color" content="#ffffff"></meta>
        
    </Head>
  )
}

Meta.defaultProps = {
  title: "PolyPortal - Access, Learn and Explore Web on Polygon",
  description: "Access, learn and explore Web3 on Polygon. PolyPortal is a community onboarding platform supporting the next generation of new Web3 users into the Polygon Network. "
}

export default Meta