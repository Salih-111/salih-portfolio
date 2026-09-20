import { useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"

type NavbarProps = {
  isDark: boolean
  onToggleTheme: () => void
}

function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-[0.25em]"
            style={{ color: "var(--text)" }}
          >
            SALIH
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="relative text-sm transition-colors duration-300 hover:text-[var(--text)] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[var(--accent)] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
              style={{ color: "var(--text-muted)" }}
            >
              About
            </a>

            <a
              href="#skills"
              className="relative text-sm transition-colors duration-300 hover:text-[var(--text)] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[var(--accent)] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
              style={{ color: "var(--text-muted)" }}
            >
              Skills
            </a>

            <a
              href="#projects"
              className="relative text-sm transition-colors duration-300 hover:text-[var(--text)] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[var(--accent)] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
              style={{ color: "var(--text-muted)" }}
            >
              Projects
            </a>

            <a
              href="#contact"
              className="relative text-sm transition-colors duration-300 hover:text-[var(--text)] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[var(--accent)] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
              style={{ color: "var(--text-muted)" }}
            >
              Contact
            </a>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface-soft)",
                color: "var(--text)",
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Download Resume
            </button>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface-soft)",
                color: "var(--text)",
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface-soft)",
                color: "var(--text)",
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="border-t py-5 md:hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex flex-col gap-2">
              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm transition-colors hover:opacity-70"
                style={{ color: "var(--text)" }}
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm transition-colors hover:opacity-70"
                style={{ color: "var(--text)" }}
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm transition-colors hover:opacity-70"
                style={{ color: "var(--text)" }}
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm transition-colors hover:opacity-70"
                style={{ color: "var(--text)" }}
              >
                Contact
              </a>

              <button
                type="button"
                onClick={closeMenu}
                className="mt-2 rounded-full px-5 py-3 text-sm font-medium text-white"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
