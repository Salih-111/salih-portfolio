

import { Download } from "lucide-react"

function Resume() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl border p-8 sm:p-10 lg:p-12"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {/* Soft Background Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl"
            style={{
              backgroundColor: "var(--accent)",
              opacity: 0.1,
            }}
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            {/* Text */}
            <div>
              <p
                className="mb-3 font-code text-sm font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                My Resume
              </p>

              <h2
                className="text-2xl font-bold tracking-tight sm:text-3xl"
                style={{ color: "var(--text)" }}
              >
                Interested in my work?
              </h2>

              <p
                className="mt-3 max-w-xl text-sm leading-7 sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                Take a look at my resume to learn more about my
                education, skills, and projects.
              </p>
            </div>

            {/* Download Button */}
            <a
              href="/SALIH_RESUME.pdf"
              download
              className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(99,102,241,0.3)]"
              style={{
                backgroundColor: "var(--accent)",
              }}
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume