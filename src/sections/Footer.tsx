
import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6"

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <footer
        className="border-t py-10"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--bg)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6">

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:mohamedsalih8764@gmail.com"
              aria-label="Send email"
              className="transition-all duration-300 hover:-translate-y-1"
              style={{ color: "var(--text-muted)" }}
            >
              <FaEnvelope
                size={19}
                className="transition-colors duration-300 hover:text-[var(--accent)]"
              />
            </a>

            <a
              href="https://wa.me/919344298831?text=Hi%20Salih%2C%20I%20found%20your%20portfolio."
              target="_blank"
              rel="noreferrer"
              aria-label="Open WhatsApp"
              className="transition-all duration-300 hover:-translate-y-1"
              style={{ color: "var(--text-muted)" }}
            >
              <FaWhatsapp
                size={20}
                className="transition-colors duration-300 hover:text-[var(--accent)]"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-salih-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn"
              className="transition-all duration-300 hover:-translate-y-1"
              style={{ color: "var(--text-muted)" }}
            >
              <FaLinkedinIn
                size={19}
                className="transition-colors duration-300 hover:text-[var(--accent)]"
              />
            </a>

            <a
              href="https://github.com/Salih-111"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub"
              className="transition-all duration-300 hover:-translate-y-1"
              style={{ color: "var(--text-muted)" }}
            >
              <FaGithub
                size={20}
                className="transition-colors duration-300 hover:text-[var(--accent)]"
              />
            </a>
          </div>

          {/* Copyright */}
          <p
            className="mt-5 text-center text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            © 2026 Mohamed Salih. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_0_22px_rgba(99,102,241,0.35)]"
          style={{
            borderColor: "var(--accent)",
            backgroundColor: "var(--surface)",
            color: "var(--accent)",
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  )
}

export default Footer