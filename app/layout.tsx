import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Smiles Through STEM',
  description: 'A student-led initiative creating and donating hands-on STEM kits to children receiving medical treatment.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#eef8ff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${dmSans.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
