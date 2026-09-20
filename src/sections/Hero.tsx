import { useEffect, useState } from "react"

function Hero() {
  const [visibleLetters, setVisibleLetters] = useState(0)

  const fullName = "Mohamed Salih"
  const firstNameLength = "Mohamed ".length

  useEffect(() => {
    if (visibleLetters >= fullName.length) return

    const timer = setTimeout(() => {
      setVisibleLetters((prev) => prev + 1)
    }, 180)

    return () => clearTimeout(timer)
  }, [visibleLetters])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              color-mix(in srgb, var(--border) 35%, transparent) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              color-mix(in srgb, var(--border) 35%, transparent) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
          opacity: 0.35,
        }}
      />

      {/* Soft Static Accent Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--accent)",
          opacity: 0.1,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Content */}
          <div className="animate-hero-content">
            <p
              className="mb-4 text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Hi, I'm
            </p>

            <h1
              className="text-5xl font-extrabold tracking-tight sm:text-6xl"
              style={{ color: "var(--text)" }}
              aria-label="Mohamed Salih"
            >
              {fullName.slice(
                0,
                Math.min(visibleLetters, firstNameLength),
              )}

              <span style={{ color: "var(--accent)" }}>
                {visibleLetters > firstNameLength
                  ? fullName.slice(firstNameLength, visibleLetters)
                  : ""}
              </span>
            </h1>

            <h2
              className="mt-4 text-2xl font-semibold sm:text-3xl"
              style={{ color: "var(--text)" }}
            >
              Frontend Developer
            </h2>

            <p
              className="mt-6 max-w-xl text-base leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              I build responsive web applications with React,
              TypeScript, and modern frontend technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--accent)",
                }}
              >
                View My Work
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                  backgroundColor: "var(--surface)",
                }}
              >
                Download Resume
              </a>
            </div>

            {/* Main Stack */}
            <p
              className="mt-5 font-code text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              React • TypeScript • JavaScript
            </p>
          </div>

          {/* Right - Code Editor */}
          <div className="animate-hero-card flex justify-center">
            <div
              className="group animate-hero-float w-full max-w-xl overflow-hidden rounded-2xl border shadow-2xl transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.18)",
              }}
            >
              {/* Editor Header */}
              <div
                className="flex items-center justify-between border-b px-5 py-4"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                {/* Traffic Lights */}
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                {/* TypeScript Badge */}
                <span
                  className="rounded-md px-2.5 py-1 font-code text-xs font-semibold"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 12%, transparent)",
                    color: "var(--accent)",
                  }}
                >
                  TS
                </span>
              </div>

              {/* Code */}
              <div className="overflow-x-auto p-6">
                <pre className="font-code text-sm leading-7 sm:text-[15px]">
                  <code style={{ color: "var(--text)" }}>
                    <span style={{ color: "#c084fc" }}>
                      const
                    </span>{" "}

                    <span style={{ color: "var(--accent)" }}>
                      developer
                    </span>{" "}

                    <span style={{ color: "var(--text-muted)" }}>
                      =
                    </span>{" "}
                    {"{"}
                    {"\n"}

                    {"  "}

                    <span style={{ color: "#60a5fa" }}>
                      name
                    </span>

                    <span style={{ color: "var(--text-muted)" }}>
                      :{" "}
                    </span>

                    <span style={{ color: "#4ade80" }}>
                      "Salih"
                    </span>
                    ,
                    {"\n"}

                    {"  "}

                    <span style={{ color: "#60a5fa" }}>
                      role
                    </span>

                    <span style={{ color: "var(--text-muted)" }}>
                      :{" "}
                    </span>

                    <span style={{ color: "#4ade80" }}>
                      "Frontend Developer"
                    </span>
                    ,
                    {"\n"}

                    {"  "}

                    <span style={{ color: "#60a5fa" }}>
                      stack
                    </span>

                    <span style={{ color: "var(--text-muted)" }}>
                      : [
                    </span>

                    <span style={{ color: "#4ade80" }}>
                      "React"
                    </span>

                    <span style={{ color: "var(--text-muted)" }}>
                      ,{" "}
                    </span>

                    <span style={{ color: "#4ade80" }}>
                      "TypeScript"
                    </span>

                    <span style={{ color: "var(--text-muted)" }}>
                      ],
                    </span>

                    {"\n"}

                    {"  "}

                    <span style={{ color: "#60a5fa" }}>
                      mindset
                    </span>

                    <span style={{ color: "var(--text-muted)" }}>
                      :{" "}
                    </span>

                    <span style={{ color: "#4ade80" }}>
                      "Build. Learn. Improve."
                    </span>

                    {"\n"}

                    {"}"}

                    <span
                      className="code-cursor"
                      aria-hidden="true"
                    />
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero