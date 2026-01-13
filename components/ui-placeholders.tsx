import { cn } from "@/lib/utils"

export function ProductUIPlaceholder({ variant = "default" }: { variant?: "default" | "mobile" | "dashboard" }) {
  if (variant === "mobile") {
    return (
      <div className="w-full max-w-[280px] mx-auto aspect-[9/16] bg-card rounded-[32px] border-[6px] border-muted p-4 shadow-2xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-muted rounded-b-xl" />
        <div className="mt-8 space-y-4">
          <div className="h-8 w-3/4 bg-primary/20 rounded-lg animate-pulse" />
          <div className="space-y-2">
            <div className="h-3 w-full bg-muted/40 rounded-full" />
            <div className="h-3 w-5/6 bg-muted/40 rounded-full" />
          </div>
          <div className="pt-8 flex flex-col items-center gap-4">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="size-8 rounded-full bg-primary animate-ping" />
            </div>
            <div className="h-3 w-24 bg-primary/30 rounded-full" />
          </div>
        </div>
      </div>
    )
  }

  if (variant === "dashboard") {
    return (
      <div className="w-full aspect-video bg-card rounded-xl border border-white/5 p-4 shadow-2xl overflow-hidden">
        <div className="flex gap-4 h-full">
          <div className="w-12 h-full border-r border-white/5 space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="size-6 bg-white/5 rounded-md mx-auto" />
            ))}
          </div>
          <div className="flex-1 space-y-6">
            <div className="h-8 w-48 bg-white/5 rounded-md" />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-white/5 rounded-lg border border-white/5" />
              ))}
            </div>
            <div className="h-40 bg-white/5 rounded-lg border border-white/5" />
          </div>
        </div>
      </div>
    )
  }

  return <AudioPulsePlaceholder />
}

export function AudioPulsePlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center h-48 w-full bg-card border border-white/5 rounded-2xl overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 h-12">
        {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 1.2, 0.6].map((scale, i) => (
          <div
            key={i}
            className="w-1.5 bg-brand-cyan rounded-full animate-pulse"
            style={{
              height: `${scale * 100}%`,
              animationDelay: `${i * 0.15}s`,
              animationDuration: "1.2s",
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="size-2 bg-red-500 rounded-full animate-ping" />
        <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">Recording...</span>
      </div>
    </div>
  )
}

export function CRMCardPlaceholder({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 bg-card border border-white/5 rounded-2xl shadow-2xl", className)}>
      <div className="flex items-center justify-between mb-6">
        <div className="h-6 w-32 bg-white/5 rounded-md" />
        <div className="size-8 bg-brand-blue-deep rounded-full opacity-20" />
      </div>
      <div className="space-y-4">
        {[80, 60, 90, 40].map((width, i) => (
          <div key={i} className="h-2 bg-white/5 rounded-full" style={{ width: `${width}%` }} />
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-white/5 flex gap-2">
        <div className="h-8 flex-1 bg-brand-blue-deep/10 rounded-md" />
        <div className="h-8 flex-1 bg-brand-blue-deep rounded-md" />
      </div>
    </div>
  )
}
