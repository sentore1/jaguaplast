import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'JAGUAPLAST | Precision Manufacturing',
  description: 'Premium plastic manufacturing solutions engineered for modern industries. Precision, durability, and performance.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon logo.png',
        type: 'image/png',
      },
    ],
    apple: '/favicon logo.png',
    shortcut: '/favicon logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
