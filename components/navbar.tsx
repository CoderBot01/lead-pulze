"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { DemoBookingModal } from "./onboarding-flow"
import { useState } from "react"
import { Logo } from "@/components/logo"

export function Navbar() {
  const pathname = usePathname()
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { name: "Product", href: "/product" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Resources", href: "/resources" },
    { name: "Company", href: "/company" },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "hover:text-primary transition-colors",
                  pathname === link.href && "text-primary font-semibold"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Button
              className="hidden sm:inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full px-6"
              onClick={() => setIsDemoOpen(true)}
            >
              Book a Demo
            </Button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* ================= Mobile Dropdown Menu ================= */}
        <div
          className={cn(
            "lg:hidden overflow-hidden border-t border-gray-200 bg-white transition-all duration-300 ease-out",
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
              <Button variant="outline" onClick={() => setMobileOpen(false)}>
                Sign In
              </Button>

              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full"
                onClick={() => {
                  setMobileOpen(false)
                  setIsDemoOpen(true)
                }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Demo modal */}
      <DemoBookingModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </>
  )
}
