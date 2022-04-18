import { AppProps } from "next/app";

import "@/styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JYND5P8R18"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-JYND5P8R18');
            `}
      </Script>
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
