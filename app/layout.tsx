import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"
import './globals.css'

export const metadata: Metadata = {
  title: "Rakesh Associates - Legal Services",
  description: "Professional legal services by Advocate Rakesh in Bangalore, specializing in Criminal, Civil, Family, and Cyber Law.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}