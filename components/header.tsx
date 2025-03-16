"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)

    // Close mobile menu when route changes
    setMobileMenuOpen(false)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 relative">
                <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/images/lawyer logo.jpg" 
                    alt="Lawyer Logo" 
                    width={32} 
                    height={32} 
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
              <span className={`font-bold text-lg ${isScrolled ? "text-primary" : "text-white"}`}>
                Rakesh Associates
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-gray-800" : "text-white"
                } ${pathname === item.href ? "border-b-2 border-primary" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Consult Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 pt-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-3 rounded-md text-lg font-medium ${
                  pathname === item.href ? "bg-primary/10 text-primary" : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center bg-primary text-white px-3 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Consult Now
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
