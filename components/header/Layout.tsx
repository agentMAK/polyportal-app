import NavBar from "./NavBar";
import Script from "next/script";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";


const Layout = ({ children }: any) => {
  const { status } = useSession();
  const router = useRouter();
  let layout = "main";

  if (router.pathname.includes("/lesson/")) {
    layout = "app";
  } else if (router.pathname.includes("/login")) {
    layout = "blank";
  }

  return (
    <div>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google"
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
      {layout === "main" ? <NavBar></NavBar> : null}
      {layout === "blank" ? (
        children
      ) : (
        <div className="w-full bg-primary-100">
          <div className="pt-20">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Layout;


