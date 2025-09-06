import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { css } from '@aurorakit/styled-system/css'
import { Header } from '@/components/docs/header'
import { Footer } from '@/components/docs/footer'
import { Toaster } from '@/components/ui/toast/toaster'
import '../styles/global.css'
import { ThemeProvider } from './theme-provider'
import { siteUrl } from '@/lib/env'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const commonMetadata = {
  title: {
    default: 'AuroraKit',
    template: '%s | AuroraKit',
  },
  description:
    'AuroraKit is a preset of Panda CSS for shadcn/ui & Radix UI, created for developers utilizing Panda CSS as an alternative to Tailwind CSS.',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...commonMetadata,
  keywords: ['AuroraKit', 'Panda CSS', 'shadcn/ui', 'Radix UI', 'Components', 'React'],
  manifest: '/site.webmanifest',
  openGraph: {
    ...commonMetadata,
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
  },
  twitter: {
    ...commonMetadata,
    site: 'AuroraKit',
    card: 'summary_large_image',
    creator: '@nanopx',
  },
}

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              flexDirection: 'column',
              minH: 'screen',
            })}
          >
            <Header />
            <div className={css({ flex: '1' })}>{props.children}</div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
