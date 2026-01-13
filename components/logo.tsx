import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-50 h-50">
        <Image
          src="/Logo.png"
          alt="LeadPulze Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
