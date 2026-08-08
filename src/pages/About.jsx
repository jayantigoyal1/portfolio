import { FiMail, FiAward, FiDownload } from "react-icons/fi";
import { DATA } from "../data";
import { useReveal } from "../hooks";
import SectionHead from "../components/SectionHead";

export default function About() {
  useReveal();

  return (
    <section>
      <SectionHead title="About" />
      <div className="about-details-grid">
        <div className="about-intro reveal">
          <h3>Hello! I'm<br /><em>Jayanti.</em></h3>
          <p>{DATA.about}</p>
          <button className="btn-primary" onClick={() => window.open(DATA.resumeUrl, "_blank")}>
            <FiDownload /> Download Resume
          </button>
        </div>
        <div className="about-info-stack reveal reveal-delay-1">
          <div className="bento-card">
            <div className="bento-card-head"><FiMail /><h3>Contact</h3></div>
            <a className="bento-card-text bento-email" href={`mailto:${DATA.email}`}>{DATA.email}</a>
            <div className="social-row">
              <a className="social-btn" href={DATA.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="social-btn" href={DATA.github}   target="_blank" rel="noreferrer">GitHub</a>
              <a className="social-btn" href={DATA.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
              <a className="social-btn" href={DATA.codechef}  target="_blank" rel="noreferrer">CodeChef</a>
              <a className="social-btn" href={DATA.codeforces}  target="_blank" rel="noreferrer">Codeforces</a>
              <a className="social-btn" href={DATA.codolio}  target="_blank" rel="noreferrer">Codolio</a>
            </div>
          </div>
          <div className="bento-card">
            <div className="bento-card-head"><FiAward /><h3>Beyond Code</h3></div>
            <p className="bento-card-text">
              Taekwondo Athlete | General Secretary at AVIRA (Martial Arts Society, IGDTUW) | Competitive Programmer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
