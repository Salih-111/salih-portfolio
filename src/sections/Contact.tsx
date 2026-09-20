import { useForm, ValidationError } from "@formspree/react"
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6"

function Contact() {
  const [state, handleSubmit] = useForm("mdekazyp")

  if (state.succeeded) {
    return (
      <section id="contact" className="relative py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div
            className="rounded-3xl border p-10 text-center sm:p-14"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="font-code text-sm uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Message Sent
            </p>

            <h2
              className="mt-3 text-3xl font-bold"
              style={{ color: "var(--text)" }}
            >
              Thanks for reaching out!
            </h2>

            <p
              className="mx-auto mt-4 max-w-xl text-sm leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              Your message has been submitted successfully. I'll get back to you
              as soon as possible.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p
            className="mb-3 font-code text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            Contact
          </p>

          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Let's connect.
          </h2>

          <p
            className="mt-4 text-base leading-7"
            style={{ color: "var(--text-muted)" }}
          >
            Have an opportunity, project, or just want to say hello? Feel free
            to reach out.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Side */}
          <div
            className="rounded-3xl border p-7 sm:p-8"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <h3
              className="text-xl font-semibold"
              style={{ color: "var(--text)" }}
            >
              Get in touch
            </h3>

            <p
              className="mt-3 text-sm leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              I'm always open to discussing frontend opportunities, projects,
              and new ideas.
            </p>

            <div className="mt-8 space-y-3">
              {/* Email */}
              <a
                href="mailto:mohamedsalih8764@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.12)]"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface-soft)",
                }}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--accent)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--accent)] group-hover:text-[var(--text)]"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 12%, transparent)",
                  }}
                >
                  <FaEnvelope size={17} />
                </span>

                <div>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Email
                  </p>

                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    mohamedsalih8764@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919344298831?text=Hi%20Salih%2C%20I%20found%20your%20portfolio."
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.12)]"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface-soft)",
                }}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--accent)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--accent)] group-hover:text-[var(--text)]"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 12%, transparent)",
                  }}
                >
                  <FaWhatsapp size={18} />
                </span>

                <div>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    WhatsApp
                  </p>

                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    Chat with me
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohamed-salih-dev"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.12)]"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface-soft)",
                }}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--accent)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--accent)] group-hover:text-[var(--text)]"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 12%, transparent)",
                  }}
                >
                  <FaLinkedinIn size={17} />
                </span>

                <div>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    LinkedIn
                  </p>

                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    Connect with me
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Salih-111"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.12)]"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface-soft)",
                }}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--accent)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--accent)] group-hover:text-[var(--text)]"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 12%, transparent)",
                  }}
                >
                  <FaGithub size={18} />
                </span>

                <div>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    GitHub
                  </p>

                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    View my projects
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="rounded-3xl border p-7 sm:p-8"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2"
                  style={{
                    backgroundColor: "var(--surface-soft)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                />

                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="mt-2 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2"
                  style={{
                    backgroundColor: "var(--surface-soft)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2"
                  style={{
                    backgroundColor: "var(--surface-soft)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 text-sm"
                />
              </div>

              {/* General Error */}
              <ValidationError errors={state.errors} className="text-sm" />

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  backgroundColor: "var(--accent)",
                }}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
