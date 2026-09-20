import {
  Code2,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react"

function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Content */}
          <div className="animate-hero-content">
            <p
              className="mb-3 font-code text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              About Me
            </p>

            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Turning ideas into real web experiences.
            </h2>

            <div className="mt-6 space-y-4">
              <p
                className="max-w-xl text-base leading-8"
                style={{ color: "var(--text-muted)" }}
              >
                I'm a Computer Science Engineering graduate focused on
                frontend development. I enjoy turning ideas into responsive
                and user-friendly web applications.
              </p>

              <p
                className="max-w-xl text-base leading-8"
                style={{ color: "var(--text-muted)" }}
              >
                I'm currently focused on building with React and TypeScript
                while improving my skills through practical projects and
                continuous learning.
              </p>
            </div>
          </div>

          {/* Right Info Card */}
          <div className="flex justify-center md:justify-end">
            <div
              className="w-full max-w-md rounded-2xl border p-6 sm:p-8"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              {/* Card Header */}
              <div className="mb-7 flex items-center justify-between gap-4">
                <span
                  className="font-code text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  &lt; Developer /&gt;
                </span>

                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 12%, transparent)",
                    color: "var(--accent)",
                  }}
                >
                  Open to Work
                </span>
              </div>

              {/* Info Items */}
              <div className="space-y-5">

                {/* Education */}
                <div className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--accent) 12%, transparent)",
                      color: "var(--accent)",
                    }}
                  >
                    <GraduationCap size={18} />
                  </div>

                  <div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Education
                    </p>

                    <p
                      className="mt-1 font-medium leading-6"
                      style={{ color: "var(--text)" }}
                    >
                      B.E. Computer Science & Engineering
                    </p>
                  </div>
                </div>

                {/* Focus */}
                <div className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--accent) 12%, transparent)",
                      color: "var(--accent)",
                    }}
                  >
                    <Code2 size={18} />
                  </div>

                  <div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Focus
                    </p>

                    <p
                      className="mt-1 font-medium"
                      style={{ color: "var(--text)" }}
                    >
                      Frontend Development
                    </p>
                  </div>
                </div>

                {/* Main Stack */}
                <div className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--accent) 12%, transparent)",
                      color: "var(--accent)",
                    }}
                  >
                    <Layers3 size={18} />
                  </div>

                  <div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Main Stack
                    </p>

                    <p
                      className="mt-1 font-medium"
                      style={{ color: "var(--text)" }}
                    >
                      React · TypeScript · JavaScript
                    </p>
                  </div>
                </div>

                {/* Approach */}
                <div className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--accent) 12%, transparent)",
                      color: "var(--accent)",
                    }}
                  >
                    <Sparkles size={18} />
                  </div>

                  <div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Approach
                    </p>

                    <p
                      className="mt-1 font-medium"
                      style={{ color: "var(--text)" }}
                    >
                      Build · Learn · Improve
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About