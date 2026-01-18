"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export function DemoBookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose()
        setSubmitted(false)
        setFormData({ name: "", email: "" })
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [submitted, onClose])

  if (!isOpen) return null

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      setError("Please fill all fields")
      return
    }

    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(
          data.emailError ||
          data.nameError ||
          data.message ||
          "Something went wrong"
        )
        setLoading(false)
        return
      }

      setSubmitted(true)
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card border border-white/10 rounded-2xl p-6 shadow-2xl relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          ✕
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-center">Book a Demo</h2>

            <p className="text-sm text-muted-foreground text-center">
              Tell us a bit about you — we’ll reach out shortly.
            </p>

            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                placeholder="Work email address"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <Button
              className="w-full h-12"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Request Demo"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              No spam. Only product insights.
            </p>
          </div>
        ) : (
          <div className="text-center space-y-4 py-10">
            <CheckCircle className="mx-auto size-12 text-primary" />
            <h3 className="text-xl font-semibold">You’re all set!</h3>
            <p className="text-sm text-muted-foreground">
              Our team will contact you shortly to schedule your demo.
            </p>
            <p className="text-xs text-muted-foreground">
              Closing automatically…
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
