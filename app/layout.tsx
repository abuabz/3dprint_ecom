import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://repliquegifts.com'),
  title: {
    default: 'Replique Gifts',
    template: '%s | Replique Gifts',
  },
  description: 'Memories, Illuminated. Premium custom lithophane gifts.',
  keywords: ['lithophane', 'gifts', '3d print', 'custom', 'lamps', 'keychains'],
  authors: [{ name: 'Replique Gifts', url: 'https://repliquegifts.com' }],
  creator: 'Replique Gifts',
  publisher: 'Replique Gifts',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  icons: {
    icon: '/rglogo.png',
  },
  openGraph: {
    title: 'Replique Gifts',
    description: 'Memories, Illuminated. Premium custom lithophane gifts.',
    url: 'https://repliquegifts.com',
    siteName: 'Replique Gifts',
    images: [
      {
        url: '/rglogo.png',
        width: 1200,
        height: 630,
        alt: 'Replique Gifts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Replique Gifts',
    description: 'Memories, Illuminated. Premium custom lithophane gifts.',
    creator: '@repliquegifts',
    images: ['/rglogo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
