import type { Metadata } from "next";
import type { Viewport } from 'next'
import "./globals.scss";
import { roboto, lato, montserrat } from "@/utils/fonts";
import Script from "next/script";
import Image from "next/image";
import GoogleProvider from "./Provider";

export const metadata: Metadata = {
  title: "StrongWood®",
  description: 'El balance perfecto entre hierro y madera',
  applicationName: "StrongWood®",
  authors: {
    name: 'Tomás Di Bacco',
    url: 'https://www.linkedin.com/in/tomas-di-bacco/'
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#f7f4ed',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* facebook pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1167956061337350');
          fbq('track', 'PageView');
                `}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N89WFSBK');
          `}
        </Script>

        <noscript>
          <Image height="1" width="1" style={{ display: "none" }} alt='fbqPixel'
            src={"https://www.facebook.com/tr?id=1167956061337350&ev=PageView&noscript=1"}
          />
        </noscript>
      </head>
      <body className={`${roboto.className} ${lato.variable} ${montserrat.variable}`}>
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N89WFSBK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <GoogleProvider>
          <main id="top">
            {children}
          </main>
        </GoogleProvider>
      </body>
    </html>
  );
}
