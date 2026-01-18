import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 pt-14 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 sm:text-left">
          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4 text-md text-foreground">Features</h4>
            <ul className="space-y-3 text-md text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Offline Capture
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  AI Structuring
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  CRM Integration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Team Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-md text-foreground">Resources</h4>
            <ul className="space-y-3 text-md text-muted-foreground">
              <li>
                <Link href="/blogs" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-md text-foreground">Company</h4>
            <ul className="space-y-3 text-md text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-md text-foreground">Legal</h4>
            <ul className="space-y-3 text-md text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 text-center">
          <p className="text-xs sm:text-md text-muted-foreground">
            © 2026 LeadPulze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
