import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-16 pb-8 bg-white">
      <div className="container mx-auto px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">Features</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Offline Capture
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  AI Structuring
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  CRM Integration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Team Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/blogs" className="hover:text-primary transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors duration-200">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-muted-foreground">© 2026 LeadPulze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
