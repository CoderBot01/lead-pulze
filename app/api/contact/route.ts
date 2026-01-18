import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

/* ================= Resend ================= */

const resend = new Resend(process.env.RESEND_API_KEY as string)

/* ================= Rate Limit ================= */

const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 1000

const rateLimitMap = new Map<string, { count: number; last: number }>()

/* ================= Email Validation ================= */

const freeEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "aol.com",
  "live.com",
  "msn.com",
]

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isWorkEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase()
  return domain && !freeEmailDomains.includes(domain)
}

/* ================= POST ================= */

export async function POST(req: NextRequest) {
  try {
    /* ---- Rate Limit ---- */
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown"

    const now = Date.now()
    const rate = rateLimitMap.get(ip) || { count: 0, last: now }

    if (now - rate.last < RATE_LIMIT_WINDOW_MS) {
      if (rate.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { message: "Too many requests. Please try again later." },
          { status: 429 }
        )
      }
      rate.count++
    } else {
      rate.count = 1
    }

    rate.last = now
    rateLimitMap.set(ip, rate)

    /* ---- Body ---- */
    const { name, email } = await req.json()

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { emailError: "Invalid email format." },
        { status: 400 }
      )
    }

    if (!isWorkEmail(email)) {
      return NextResponse.json(
        { emailError: "Please use your work email." },
        { status: 400 }
      )
    }

    /* ---- Send to Sales ---- */
    await resend.emails.send({
      from: "LeadPulze Demo <onboarding@resend.dev>",
      to: "praveenkumarellai555@gmail.com",
      subject: `New Demo Request — ${name}`,
      html: `
        <h2>New Demo Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
      `,
      replyTo: email,
    })

    /* ---- Auto Reply to User (Optional but Recommended) ---- */
    await resend.emails.send({
      from: "LeadPulze Team <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for requesting a LeadPulze demo!",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for your interest in LeadPulze 🚀</p>
        <p>Our team will contact you shortly to schedule your demo.</p>
        <br/>
        <p>— Team LeadPulze</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("CONTACT API ERROR:", err)
    return NextResponse.json(
      { message: "Server error. Please try again later." },
      { status: 500 }
    )
  }
}

/* ================= Cleanup ================= */

setInterval(() => {
  const now = Date.now()
  for (const [ip, info] of rateLimitMap.entries()) {
    if (now - info.last > 10 * RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip)
    }
  }
}, RATE_LIMIT_WINDOW_MS)
