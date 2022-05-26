import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          defer
          type="text/javascript"
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code="mB3JwyPiwu30oqj3cvegvX6eQGpfcsiz"
        ></script>
        <script
      id='twitter'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        // Insert Twitter Pixel ID and Standard Event data below
        twq('init','o8vkx');
        twq('track','PageView');
      `,
      }}
    />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
