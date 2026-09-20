

import { useEffect, useRef } from "react"

function MouseFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!dotRef.current) return

      const x = event.clientX
      const y = event.clientY

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }

      frameRef.current = requestAnimationFrame(() => {
        if (!dotRef.current) return

        dotRef.current.style.transform =
          `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-2.5 w-2.5 rounded-full md:block"
      style={{
        backgroundColor: "var(--accent)",
        boxShadow:
          "0 0 14px color-mix(in srgb, var(--accent) 70%, transparent)",
      }}
    />
  )
}

export default MouseFollower