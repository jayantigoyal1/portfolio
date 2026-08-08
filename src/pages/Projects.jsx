import { useEffect } from "react";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { DATA } from "../data";
import { useReveal } from "../hooks";
import SectionHead from "../components/SectionHead";
import ProjectArt from "../components/ProjectArt";

export default function Projects() {
  useReveal();

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const move = (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width)  * 100}%`);
      e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top)  / r.height) * 100}%`);
    };
    cards.forEach((c) => c.addEventListener("mousemove", move));
    return () => cards.forEach((c) => c.removeEventListener("mousemove", move));
  });

  return (
    <section>
      <SectionHead
        title="Featured Projects"
        action={
          <a className="bento-head-link section-head-link" href={DATA.github} target="_blank" rel="noreferrer">
            View All Projects <FiArrowUpRight />
          </a>
        }
      />
      <div className="projects-grid">
        {DATA.projects.map((p, i) => (
          <div key={p.name} className={`project-card reveal reveal-delay-${i + 1}`}>
            <div className="project-thumb">
              <ProjectArt name={p.name} />
              {(p.demo || p.repo) && (
                <a
                  className="project-thumb-link"
                  href={p.demo || p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.name}`}
                >
                  <FiExternalLink />
                </a>
              )}
            </div>
            <div className="project-name">{p.name}</div>
            <p className="project-tagline">{p.tagline}</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "14px 0" }}>
              {p.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
            </div>
            <div className="project-links">
              {p.repo && <a className="project-link" href={p.repo} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>}
              {p.demo && <a className="project-link" href={p.demo} target="_blank" rel="noreferrer"><FiExternalLink /> Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
