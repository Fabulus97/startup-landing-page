import React from "react"
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
      <body className={`${inter.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
