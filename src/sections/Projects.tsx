import { useState } from "react"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa6"

import { projects } from "../data/projects"

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentProject = projects[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1,
    )
  }

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p
            className="mb-3 font-code text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            Projects
          </p>

          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Things I've built.
          </h2>

          <p
            className="mt-4 text-base leading-7"
            style={{ color: "var(--text-muted)" }}
          >
            A look at some of the applications and projects I've worked on.
          </p>
        </div>

        {/* Project Card */}
        <div
          key={currentProject.title}
          className="project-slide mt-10 overflow-hidden rounded-3xl border"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Project Preview */}
            <div
              className="flex min-h-[320px] items-center justify-center p-6 sm:p-8 lg:min-h-[460px]"
              style={{
                backgroundColor: "var(--surface-soft)",
              }}
            >
              {currentProject.image ? (
                <img
                  src={currentProject.image}
                  alt={`${currentProject.title} preview`}
                  className="h-full max-h-[400px] w-full rounded-2xl object-cover shadow-xl"
                />
              ) : (
                <div
                  className="flex aspect-video w-full max-w-2xl items-center justify-center rounded-2xl border"
                  style={{
                    backgroundColor: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="text-center">
                    <p
                      className="font-code text-sm"
                      style={{ color: "var(--accent)" }}
                    >
                      PROJECT PREVIEW
                    </p>

                    <p
                      className="mt-2 text-lg font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      {currentProject.title}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p
                className="font-code text-sm"
                style={{ color: "var(--accent)" }}
              >
                Featured Project
              </p>

              <h3
                className="mt-3 text-2xl font-bold sm:text-3xl"
                style={{ color: "var(--text)" }}
              >
                {currentProject.title}
              </h3>

              <p
                className="mt-5 text-sm leading-7 sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                {currentProject.description}
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {currentProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium"
                    style={{
                      backgroundColor: "var(--surface-soft)",
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface-soft)",
                    color: "var(--text)",
                  }}
                >
                  <FaGithub size={17} />
                  GitHub
                </a>

                {currentProject.live && (
                  <a
                    href={currentProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "white",
                    }}
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="relative mt-7 flex items-center justify-between">
          {/* Previous */}
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous project"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent)] hover:text-white hover:shadow-[0_0_22px_rgba(99,102,241,0.35)]"
            style={{
              borderColor: "var(--accent)",
              backgroundColor:
                "color-mix(in srgb, var(--accent) 10%, var(--surface))",
              color: "var(--accent)",
            }}
          >
            <ArrowLeft size={20} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next project"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent)] hover:text-white hover:shadow-[0_0_22px_rgba(99,102,241,0.35)]"
            style={{
              borderColor: "var(--accent)",
              backgroundColor:
                "color-mix(in srgb, var(--accent) 10%, var(--surface))",
              color: "var(--accent)",
            }}
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show ${project.title}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: index === currentIndex ? "24px" : "6px",
                backgroundColor:
                  index === currentIndex
                    ? "var(--accent)"
                    : "var(--border)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects