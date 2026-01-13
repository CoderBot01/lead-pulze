"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { DemoBookingModal } from "./onboarding-flow"
import { useState } from "react"
import { Logo } from "@/components/logo"

export function Navbar() {
  const pathname = usePathname()
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const navLinks = [
    { name: "Product", href: "/product" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Resources", href: "/resources" },
    { name: "Company", href: "/company" },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto lg:px-40 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
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

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <Button
              className="hidden sm:inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full px-6"
              onClick={() => setIsDemoOpen(true)}
            >
              Book a Demo
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Button variant="outline">Sign In</Button>

                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full"
                    onClick={() => setIsDemoOpen(true)}
                  >
                    Book a Demo
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
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
