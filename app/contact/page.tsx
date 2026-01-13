import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Linkedin, Instagram, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-foreground pt-20 font-sans">
      <Navbar />

      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground">
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Us</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-semibold mb-6 max-w-2xl mx-auto">
          Want to see LeadPulze in action? Let's talk.
        </p>
        <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto">
          Let's take your business journey to the next level!
        </p>
      </section>

      <section className="container mx-auto px-4 pb-28 grid lg:grid-cols-2 gap-12 items-start max-w-6xl">
        {/* Left Column: Get In Touch & Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-10 tracking-tight text-foreground">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Locations */}
              <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-3 mb-6 text-blue-600">
                  <MapPin className="size-6" />
                  <h3 className="font-bold text-lg text-foreground">Locations</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground font-medium">
                  <li>Chicago, USA</li>
                  <li>Bengaluru, India</li>
                  <li>Singapore</li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-lg mb-6 text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-3 rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors">
                    <Facebook className="size-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                    <Linkedin className="size-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-cyan-50 text-cyan-600 hover:bg-cyan-100 transition-colors">
                    <Instagram className="size-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 rounded-3xl border border-gray-200 bg-gray-50 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3 text-foreground">Your Details</h2>
            <p className="text-muted-foreground">Let us know how to get back to you.</p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name here"
                  className="h-12 bg-white border-gray-200 text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name here"
                  className="h-12 bg-white border-gray-200 text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-sm font-semibold text-foreground">
                Mobile Number *
              </Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                className="h-12 bg-white border-gray-200 text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Example: user@website.com"
                className="h-12 bg-white border-gray-200 text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="text-sm font-semibold text-foreground">
                Job Title *
              </Label>
              <Input
                id="jobTitle"
                placeholder="Your job title"
                className="h-12 bg-white border-gray-200 text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventDate" className="text-sm font-semibold text-foreground">
                When is your next event? *
              </Label>
              <Input
                id="eventDate"
                type="date"
                className="h-12 bg-white border-gray-200 text-foreground appearance-none"
                required
              />
            </div>

            <Button className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90 transition-opacity cta-animate shadow-lg rounded-full">
              Submit & Book a Demo
            </Button>
          </form>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400" />
        <div className="container relative mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            Stop Leaving Money on the Table at Every Exhibition
          </h2>
          <p className="text-lg text-white/90 mb-10">
            See how LeadPulze transforms exhibition conversations into closed deals.
          </p>
          <Button
            size="lg"
            className="cta-animate h-14 px-10 text-lg font-bold bg-white text-blue-600 border-none hover:bg-white/90 shadow-xl rounded-full"
          >
            Submit & Book a Demo
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
