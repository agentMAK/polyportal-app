import NavBar from "./NavBar"
import Script from 'next/script'
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import React from "react"
import NewNavBar from "./NewNavBar"


const Layout = ({ children }:any) => {
  const { status } = useSession()
  const router = useRouter()
  let appLayout = false

  if (router.pathname.includes("/lesson/")) {
    appLayout = true
  }
    return (
        <div>
            <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script src="https://player.vimeo.com/api/player.js"></Script>
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
            {!appLayout ? <NewNavBar></NewNavBar> : null}
            {!appLayout ? <div className="w-full h-screen bg-gradient-to-b from-primary500/10"><div className="pt-20">
                { children }
            </div></div> :children }
        </div>
    ) 

  }

export default Layout