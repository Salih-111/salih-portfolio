

import { useEffect, useState } from "react"

type PreloaderProps = {
  onComplete: () => void
}

function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 1200
    const startTime = performance.now()

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const nextProgress = Math.min((elapsed / duration) * 100, 100)

      setProgress(nextProgress)

      if (nextProgress < 100) {
        requestAnimationFrame(updateProgress)
      } else {
        setTimeout(onComplete, 150)
      }
    }

    requestAnimationFrame(updateProgress)
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="text-center">
        <p
          className="font-code text-2xl font-semibold tracking-[0.08em]"
          style={{ color: "var(--accent)" }}
        >
          &gt; SALIH_
        </p>

        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
          <div
            className="h-full rounded-full transition-[width] duration-100"
            style={{
              width: `${progress}%`,
              backgroundColor: "var(--accent)",
            }}
          />
        </div>

        <p
          className="mt-3 font-code text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          Loading {Math.round(progress)}%
        </p>
      </div>
    </div>
  )
}

export default Preloader