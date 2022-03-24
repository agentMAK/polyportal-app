import NavBar from "./elements/NavBar"
import Script from 'next/script'


const Layout = ({ children }:any) => {
    return (
        <div>
            <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script id="google"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
            <NavBar></NavBar>
            <div className="w-full h-screen bg-gradient-to-b from-primary500/10">
                { children }
            </div>
        </div>
    )
  }

export default Layout