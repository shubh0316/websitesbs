import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './footer'
import Navbar from './Navbar'
import FlagSection from './FlagSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'website',
  description: 'Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <FlagSection />
        <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
