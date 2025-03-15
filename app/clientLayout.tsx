"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { SplashScreen } from "@/components/splash-screen"
import { DisclaimerModal } from "@/components/disclaimer-modal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { HiddenSignature } from "@/components/hidden-signature"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <SplashScreen />
          <DisclaimerModal pathname={pathname} />
          <Header />
          <main className="min-h-screen pt-16 md:pt-20">{children}</main>
          <Footer />
          <HiddenSignature />
        </ThemeProvider>
      </body>
    </html>
  )
}
