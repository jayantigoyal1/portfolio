import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiGithub, FiLinkedin, FiMail, FiUser, FiShield, FiCode,
  FiCpu, FiArrowUpRight, FiBarChart2,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { DATA, heroImage } from "../data";
import { TECH_PREVIEW } from "../constants";
import { useReveal } from "../hooks";
import TechTile from "../components/TechTile";
import CertCarousel from "../components/CertCarousel";
import Lightbox from "../components/Lightbox";

export default function Home() {
  const [lightboxCert, setLightboxCert] = useState(null);
  useReveal();

  return (
    <>
      {/* ════════════════════════════════════════
          HERO
          ════════════════════════════════════════ */}
      <section className="hero" style={{ maxWidth: "none", padding: "0 40px" }}>
        <div className="hero-bg-blob" style={{ width: 500, height: 500, top: "-80px",  right: "5%",   opacity: 0.70 }} />
        <div className="hero-bg-blob" style={{ width: 260, height: 260, bottom: "60px", left: "-40px", opacity: 0.45, animationDelay: "-4s" }} />

        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">👋 Hi there! I'm</p>
            <h1 className="hero-name">
              Jayanti<br /><em>Goyal</em>
            </h1>
            <p className="hero-subtitle">{DATA.subtitle}</p>
            <p className="hero-desc">{DATA.about}</p>
            <div className="hero-cta-row">
              <Link className="btn-primary" to="/projects">View My Work →</Link>
              <Link className="btn-outline" to="/about"><FiMail /> Get In Touch</Link>
            </div>
            <div className="social-icon-row">
              <a className="social-icon-btn" href={DATA.github}   target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a className="social-icon-btn" href={DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a className="social-icon-btn" href={DATA.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
              <a className="social-icon-btn" href={DATA.codolio}  target="_blank" rel="noreferrer" aria-label="Codolio stats"><FiBarChart2 /></a>
              <a className="social-icon-btn" href={`mailto:${DATA.email}`} aria-label="Email"><FiMail /></a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-card">
              <div className="hero-chip-badge"><FiCpu /></div>
              <div className="hero-scene">
                <img src={heroImage} alt="Illustration of Jayanti Goyal coding" />
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.5 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.12em", color: "#b09070", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #b09070, transparent)" }} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          QUICK LINKS — About Me / Certifications / Tech Stack
          ════════════════════════════════════════ */}
      <section style={{ maxWidth: "none", padding: "64px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <div className="bento-row">
            <div className="bento-card reveal">
              <div className="bento-card-head"><FiUser /><h3>About Me</h3></div>
              <p className="bento-card-text">{DATA.about}</p>
              <Link className="btn-outline btn-sm" to="/about">
                More About Me <FiArrowUpRight />
              </Link>
            </div>

            <div className="bento-card reveal reveal-delay-1">
              <div className="bento-card-head-row">
                <div className="bento-card-head"><FiShield /><h3>Certifications</h3></div>
                <Link className="bento-head-link" to="/certifications">View All <FiArrowUpRight /></Link>
              </div>
              <CertCarousel certs={DATA.certifications.slice(0, 4)} onOpen={setLightboxCert} />
            </div>

            <div className="bento-card reveal reveal-delay-2">
              <div className="bento-card-head-row">
                <div className="bento-card-head"><FiCode /><h3>Tech Stack</h3></div>
                <Link className="bento-head-link" to="/skills">View All <FiArrowUpRight /></Link>
              </div>
              <div className="tech-tile-grid">
                {TECH_PREVIEW.map((name) => <TechTile key={name} name={name} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxCert && (
        <Lightbox image={lightboxCert.image} caption={lightboxCert.title} onClose={() => setLightboxCert(null)} />
      )}
    </>
  );
}
