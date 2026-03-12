import React from "react"
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-inter',
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lia for Startup - Automatizza i solleciti per la tua Startup',
  description: 'Carica le prime 100 fatture gratis per Startup innovative. Riduci del 70% il tempo di incasso delle fatture scadute con il nostro software AI.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/logo-lia.svg?v=2',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo-lia.svg?v=2',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <meta name="facebook-domain-verification" content="rjn3b9fidvy7nv6ebam5q331b5d70f" />
      </head>
      <body className={`${inter.variable} ${openSans.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXD2WW4L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
        <Script
          src="https://embeds.iubenda.com/widgets/b6fa9479-7f95-4e1d-8597-4e67850e2a74.js"
          strategy="afterInteractive"
        />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MXD2WW4L');`}
        </Script>
      </body>
    </html>
  )
}
