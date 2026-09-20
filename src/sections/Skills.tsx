import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa6"

import { SiMysql, SiTypescript } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "TypeScript"]

const programmingSkills = ["Java"]

const databaseSkills = ["MySQL"]

const toolSkills = ["Git", "GitHub", "VS Code"]

const marqueeSkills = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#ED8B00",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#6E7781",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "#007ACC",
  },
]

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div
      className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.10)]"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <h3
        className="text-lg font-semibold transition-colors duration-300 group-hover:text-[var(--accent)]"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--surface-soft)",
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p
            className="mb-3 font-code text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            Skills
          </p>

          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Tools I use to build and create.
          </h2>

          <p
            className="mt-4 text-base leading-7"
            style={{ color: "var(--text-muted)" }}
          >
            A mix of frontend technologies, programming fundamentals, database
            knowledge, and development tools.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <SkillGroup title="Frontend" skills={frontendSkills} />

          <SkillGroup title="Programming" skills={programmingSkills} />

          <SkillGroup title="Database" skills={databaseSkills} />

          <SkillGroup title="Tools" skills={toolSkills} />
        </div>
      </div>

      {/* Floating Skills Train */}
      <div className="skills-marquee mt-16">
        <div className="skills-marquee-track">
          {[...marqueeSkills, ...marqueeSkills].map(
            ({ name, icon: Icon, color }, index) => (
              <div key={`${name}-${index}`} className="skills-marquee-item">
                <Icon
                  className="skills-marquee-icon"
                  style={{ color }}
                  aria-hidden="true"
                />

                <span className="skills-marquee-name">{name}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills
