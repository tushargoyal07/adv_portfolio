"use client"
import Link from "next/link"
import { Gavel } from "lucide-react"

export function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Gavel className="h-6 w-6" />
          <span className="font-bold">Rakesh Associates</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#practice-areas" className="text-sm font-medium hover:text-primary">
            Practice Areas
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

