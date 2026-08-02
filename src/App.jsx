//  Portfolio.jsx  –  Jayanti Goyal

import { useState, useEffect, useRef } from "react";
import heroImage from "./assets/icon.png";
import certMLImg from "./assets/machine learning.jpeg";
import certOracleImg from "./assets/oracle ai cert.jpg";
import certMstemImg from "./assets/Jayanti Goyal mstem (1).jpg";
import certForwardImg from "./assets/Forward.jpg";
import certCS50PImg from "./assets/CS50P cert.png";
import certIEEEImg from "./assets/iee open source.png";
import certMSCImg from "./assets/msc certificate.jpg";
import certGDGCPImg from "./assets/GDG CP.png";
import certSWOCImg from "./assets/SWOC.png";
import {
  FiGithub, FiLinkedin, FiMail, FiDownload, FiExternalLink,
  FiUser, FiShield, FiCode, FiFolder, FiCpu,
  FiBriefcase, FiBookOpen, FiAward, FiBarChart2, FiCalendar, FiMapPin,
  FiChevronLeft, FiChevronRight, FiArrowUpRight, FiZoomIn, FiX,
} from "react-icons/fi";
import {
  SiPython, SiCplusplus, SiJavascript, SiTensorflow, SiKeras, SiPytorch,
  SiScikitlearn, SiNumpy, SiPandas, SiOpencv, SiReact, SiHtml5,
  SiTailwindcss, SiVite, SiNodedotjs, SiExpress, SiMongodb, SiGit,
  SiHuggingface, SiKaggle, SiVercel, SiRender, SiLeetcode,
} from "react-icons/si";

const DATA = {
  name: "Jayanti Goyal",
  title: "Software Developer",
  subtitle: "CS Engineer · ML Enthusiast · Competitive Programmer",
  email: "jayantigoyal1911@gmail.com",
  phone: "8700639384",
  linkedin: "https://www.linkedin.com/in/jayanti-goyal-99b550267/",
  github: "https://github.com/jayantigoyal1",
  leetcode: "https://leetcode.com/u/ioVX0SIZpA/",
  codechef: "https://www.codechef.com/users/jayantigoyal19",
  codeforces: "https://codeforces.com/profile/jayantigoyal",
  codolio: "https://codolio.com/profile/jayantigoyal",
  about: `I'm a Computer Science student at IGDTUW passionate about software development, AI/ML, and building impactful products. I enjoy turning ideas into scalable applications and continuously improving my problem-solving skills through projects and coding.`,

  experience: [
    {
      role: "AI Intern",
      company: "Digitup Solutions",
      period: "Feb 2026 – Apr 2026",
      location: "Gurgaon, India",
      bullets: [
        "Researched AI automation for the ticketing system; labeled 1,000+ data samples for ML training.",
        "Architected an AI-based text-generation module producing customised problem statements via structured parameters.",
      ],
    },
    {
      role: "Python & ML Intern",
      company: "Anveshan Foundation, IGDTUW",
      period: "Jun 2025 – Jul 2025",
      location: "Delhi, India",
      bullets: [
        "Built a real-time ASL recognition pipeline (TensorFlow + OpenCV) classifying 26 ASL alphabets.",
        "Added multilingual translation support for 8 Indian regional languages.",
      ],
    },
  ],

  projects: [
    {
      name: "DocIntel-AI",
      tagline: "AI-powered document intelligence platform for classification, information extraction, and document Q&A",
      tech: ["Python", "PyTorch", "Hugging Face Transformers", "LayoutLMv3", "Tesseract OCR", "Streamlit"],
      desc: "Analyses scanned documents using OCR and multimodal transformers, classifying files across 16 document categories with 78.5% accuracy, extracting key entities via NER, and enabling visual question answering through an end-to-end document understanding workflow.",
      repo: "https://github.com/jayantigoyal1/DocIntel-AI",
      demo: "https://huggingface.co/spaces/jayantigoyal/docintel-ai",
      tags: ["FULLSTACK", "Transformers", "Streamlit"],
    },
    {
      name: "TopCorner",
      tagline: "Live football predictions & private leagues",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind"],
      desc: "Engineered a full-stack app with 15+ REST endpoints, aggregating live match data across 6 major leagues. Features an automated 3-tier scoring engine with real-time leaderboard updates inside invite-code leagues.",
      repo: "https://github.com/jayantigoyal1/TopCorner",
      demo: "https://top-corner.vercel.app/",
      tags: ["FULLSTACK", "SPORTS", "REST API"],
    },
    {
      name: "ASL Translator",
      tagline: "Real-time sign language → 8 languages",
      tech: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "NumPy"],
      desc: "Deep-learning pipeline trained on 2,600+ gesture samples achieving 85%+ accuracy for 26 ASL alphabets, with multilingual output across eight Indian regional languages.",
      repo: "https://github.com/jayantigoyal1/ASL_Translator",
      demo: null,
      tags: ["ML", "COMPUTER VISION", "NLP"],
    },
    {
      name: "EcoVive",
      tagline: "Chrome ext that scores product sustainability",
      tech: ["React", "Flask", "Vite", "Tailwind"],
      desc: "Chrome Extension + Flask backend analysing e-commerce pages with a 40+ signal keyword engine across 13 product categories, matched to 50+ sustainable alternatives ranked by eco-score.",
      repo: "https://github.com/jayantigoyal1/Ecovive",
      demo: null,
      tags: ["CHROME EXT", "FLASK", "SUSTAINABILITY"],
    },
  ],

  skills: {
    Languages: ["C++", "Python", "JavaScript"],
    "Machine Learning": ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "OpenCV", "Matplotlib", "NLP", "LayoutLMv3"],
    Frontend: ["React", "HTML/CSS", "Tailwind CSS", "Vite"],
    "Backend & Databases": ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"],
    Tools: ["Git", "Hugging Face Hub", "Kaggle (GPU Training)", "Vercel", "Render"],
  },

  achievements: [
    { icon: "🏅", text: " Selected for **Amazon ML Summer School 2026** by Amazon" },
    { icon: "🎓", text: "Selected among **Top 100 students in India** for MSTEM Scholarship 2026 by Marvell Technology" },
    { icon: "🏆", text: "Flipkart Grid 8.0 **Semi Finalist**" },
    { icon: "🏅", text: "Selected for zonals of **Woemn Who Master hackathon** by Logitech and Aspire for Her" },
    { icon: "💡", text: "**650+ problems solved** on LeetCode, CodeChef & Codeforces" },
    { icon: "🎓", text: "Completed **McKinsey Forward Program 2026** by McKinsey & Company" },
    { icon: "🏆", text: "**3rd Place** (80+ teams) – Mobile App Dev Hackathon, IGDTUW" },
    { icon: "🥇", text: "**Ranked 1st** – MERN Stack Cohort, MSC Summer Bootcamp 2025" },
    { icon: "🥇", text: "**Ranked 1st** – Competitive Programming Cohort, GDG IGDTUW" },
    { icon: "🏅", text: "**5th Place** (500+ participants) – IEEE Open Source Week 2025" },
    { icon: "🎓", text: "**SheCodes Foundation Scholar 2024**" },
    { icon: "💡", text: "**Top 50**: AlgoVerse 2025 conducted by HackWithIndia IGDTUW" },
    { icon: "🥋", text: "**2nd Place** – Taekwondo (Poomsae), Sangram 2025, IIT Roorkee" },
  ],

  certifications: [
    {
      title: "Machine Learning Specialization",
      subtitle: "DeepLearning.AI · Stanford Online · Coursera",
      image: certMLImg,
    },
    {
      title: "Oracle Cloud Infrastructure AI Foundations",
      subtitle: "Foundations Associate · Oracle · 2025",
      image: certOracleImg,
    },
    {
      title: "M-STEM Scholarship",
      subtitle: "Marvell Scholarship for Technical & Engineering Merit",
      image: certMstemImg,
    },
    {
      title: "Forward Program",
      subtitle: "McKinsey.org · Future-of-Work Skills",
      image: certForwardImg,
    },
    {
      title: "CS50P",
      subtitle: "Introduction to Programming with Python (Harvard)",
      image: certCS50PImg,
    },
    {
      title: "IEEE Open Source Week",
      subtitle: "Runner Up · IEEE Open Source Week 2025",
      image: certIEEEImg,
    },
    {
      title: "MERN Stack Cohort",
      subtitle: "Ranked 1st · MSC Summer Bootcamp 2025",
      image: certMSCImg,
    },
    {
      title: "Competitive Programming Cohort",
      subtitle: "Ranked 1st · GDG IGDTUW",
      image: certGDGCPImg,
    },
    {
      title: "Snowscript Winter of Code",
      subtitle: "Top 20 Performers · GDG IGDTUW",
      image: certSWOCImg,
    },
  ],

  education: [
    {
      institution: "Indira Gandhi Delhi Technical University for Women",
      degree: "B.Tech – Computer Science & Engineering",
      period: "2024 – 2028",
      location: "Delhi, India",
      detail: "CGPA: 9.00",
    },
    {
      institution: "St. Columbo Public School",
      degree: "Class XII (PCM) – CBSE",
      period: "2022 – 2023",
      location: "Delhi, India",
      detail: "Percentage: 85.6%",
    },
    {
      institution: "St. Columbo Public School",
      degree: "Class X – CBSE",
      period: "2020 – 2021",
      location: "Delhi, India",
      detail: "Percentage: 93%",
    },
  ],
};

/* ─────────────────────────────────────────────
   ICONS FOR TECH TILES  (only real DATA.skills entries)
   ───────────────────────────────────────────── */
const ICON_MAP = {
  "C++":                    { Icon: SiCplusplus,   color: "#00599C" },
  "Python":                 { Icon: SiPython,      color: "#3776AB" },
  "JavaScript":             { Icon: SiJavascript,  color: "#D7B900" },
  "TensorFlow":             { Icon: SiTensorflow,  color: "#FF6F00" },
  "Keras":                  { Icon: SiKeras,       color: "#D00000" },
  "PyTorch":                { Icon: SiPytorch,     color: "#EE4C2C" },
  "Scikit-learn":           { Icon: SiScikitlearn, color: "#F7931E" },
  "NumPy":                  { Icon: SiNumpy,       color: "#4D77CF" },
  "Pandas":                 { Icon: SiPandas,      color: "#150458" },
  "OpenCV":                 { Icon: SiOpencv,      color: "#5C3EE8" },
  "React":                  { Icon: SiReact,       color: "#149ECA" },
  "HTML/CSS":               { Icon: SiHtml5,       color: "#E34F26" },
  "Tailwind CSS":           { Icon: SiTailwindcss, color: "#0EA5B7" },
  "Vite":                   { Icon: SiVite,        color: "#8B5CF6" },
  "Node.js":                { Icon: SiNodedotjs,   color: "#3C873A" },
  "Express.js":             { Icon: SiExpress,     color: "#2D2D2D" },
  "MongoDB":                { Icon: SiMongodb,     color: "#3FA037" },
  "Git":                    { Icon: SiGit,         color: "#E44C30" },
  "Hugging Face Hub":       { Icon: SiHuggingface, color: "#D89400" },
  "Kaggle (GPU Training)":  { Icon: SiKaggle,      color: "#20BEFF" },
  "Vercel":                 { Icon: SiVercel,      color: "#2D2D2D" },
  "Render":                 { Icon: SiRender,      color: "#1C9C7E" },
};

// Skill groups that need extra width to fit their tiles in one row
const WIDE_SKILL_GROUPS = ["Machine Learning", "Backend & Databases", "Tools"];

const TECH_PREVIEW = [
  "Python", "C++", "JavaScript", "React",
  "Node.js", "Express.js", "MongoDB", "Tailwind CSS",
  "TensorFlow", "PyTorch", "OpenCV", "Git",
];

/* ─────────────────────────────────────────────
   SCROLL-REVEAL HOOK
   ───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────
   TECH TILE
   ───────────────────────────────────────────── */
function TechTile({ name }) {
  const entry = ICON_MAP[name];
  if (!entry) {
    return <span className="skill-tag">{name}</span>;
  }
  const { Icon, color } = entry;
  return (
    <div className="tech-tile">
      <Icon className="tech-tile-icon" style={{ color }} />
      <span className="tech-tile-label">{name}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROJECT THUMBNAIL ART  (hand-drawn, theme-matched per project)
   ───────────────────────────────────────────── */
function ProjectArt({ name }) {
  const stroke = "#2e1e0e";
  const paper = "#fff8ee";
  const cream = "#f4e6cd";
  const accent = "#c67c38";

  switch (name) {
    case "DocIntel-AI":
      return (
        <svg width="72" height="72" viewBox="0 0 100 100" aria-hidden="true">
          <rect x="24" y="16" width="42" height="54" rx="4" fill={paper} stroke={stroke} strokeWidth="2" />
          <rect x="34" y="26" width="42" height="54" rx="4" fill={cream} stroke={stroke} strokeWidth="2" />
          <line x1="42" y1="38" x2="68" y2="38" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="42" y1="46" x2="68" y2="46" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
          <line x1="42" y1="54" x2="60" y2="54" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
          <circle cx="70" cy="66" r="12" fill="none" stroke={stroke} strokeWidth="2.5" />
          <line x1="79" y1="75" x2="86" y2="82" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "TopCorner":
      return (
        <svg width="72" height="72" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="34" fill={paper} stroke={stroke} strokeWidth="2.5" />
          <polygon points="50,34 61,42 57,55 43,55 39,42" fill={stroke} />
          <line x1="50" y1="34" x2="50" y2="20" stroke={stroke} strokeWidth="2" />
          <circle cx="50" cy="18" r="2.5" fill={stroke} />
          <line x1="61" y1="42" x2="76" y2="36" stroke={stroke} strokeWidth="2" />
          <circle cx="78" cy="34" r="2.5" fill={stroke} />
          <line x1="57" y1="55" x2="66" y2="70" stroke={stroke} strokeWidth="2" />
          <circle cx="68" cy="73" r="2.5" fill={stroke} />
          <line x1="43" y1="55" x2="34" y2="70" stroke={stroke} strokeWidth="2" />
          <circle cx="32" cy="73" r="2.5" fill={stroke} />
          <line x1="39" y1="42" x2="24" y2="36" stroke={stroke} strokeWidth="2" />
          <circle cx="22" cy="34" r="2.5" fill={stroke} />
        </svg>
      );
    case "ASL Translator":
      return (
        <svg width="72" height="72" viewBox="0 0 100 100" aria-hidden="true">
          <rect x="16" y="52" width="18" height="9" rx="4.5" fill={cream} stroke={stroke} strokeWidth="2" transform="rotate(-30 25 56)" />
          <rect x="33" y="24" width="8" height="30" rx="4" fill={cream} stroke={stroke} strokeWidth="2" />
          <rect x="44" y="16" width="8" height="38" rx="4" fill={cream} stroke={stroke} strokeWidth="2" />
          <rect x="55" y="18" width="8" height="36" rx="4" fill={cream} stroke={stroke} strokeWidth="2" />
          <rect x="66" y="26" width="8" height="28" rx="4" fill={cream} stroke={stroke} strokeWidth="2" />
          <rect x="30" y="46" width="38" height="34" rx="12" fill={cream} stroke={stroke} strokeWidth="2.3" />
          <circle cx="80" cy="30" r="11" fill="none" stroke={accent} strokeWidth="2.3" />
          <path d="M75 30h10M80 25v10" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "EcoVive":
      return (
        <svg width="72" height="72" viewBox="0 0 100 100" aria-hidden="true">
          <rect x="22" y="22" width="46" height="46" rx="8" fill={paper} stroke={stroke} strokeWidth="2.3" />
          <circle cx="71" cy="45" r="7" fill={paper} stroke={stroke} strokeWidth="2.3" />
          <path d="M45 30c14 0 24 11 20 27-15 3-27-6-27-20 0-4 3-7 7-7z" fill="#7ab87e" stroke={stroke} strokeWidth="2" />
          <path d="M45 32c-2 10-2 18 18 24" fill="none" stroke={stroke} strokeWidth="1.4" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─────────────────────────────────────────────
   BOLD KEYWORD PARSER  (turns **word** into <strong>)
   ───────────────────────────────────────────── */
function boldify(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

/* ─────────────────────────────────────────────
   CERTIFICATIONS
   ───────────────────────────────────────────── */
function CertThumb({ cert, onOpen }) {
  if (!cert.image) {
    return (
      <div className="cert-thumb">
        <FiAward />
      </div>
    );
  }
  return (
    <div className="cert-thumb cert-thumb-img" onClick={() => onOpen(cert)} role="button" tabIndex={0}>
      <img src={cert.image} alt={cert.title} />
      <span className="cert-zoom-hint"><FiZoomIn /></span>
    </div>
  );
}

function CertCarousel({ certs, onOpen }) {
  const [index, setIndex] = useState(0);
  const cert = certs[index];

  return (
    <div className="cert-carousel">
      <CertThumb cert={cert} onOpen={onOpen} />
      <div className="cert-info">
        <div className="cert-title">{cert.title}</div>
        {cert.subtitle && <div className="cert-subtitle">{cert.subtitle}</div>}
      </div>
      <div className="cert-nav">
        <button
          className="cert-nav-btn"
          aria-label="Previous certification"
          onClick={() => setIndex((i) => (i - 1 + certs.length) % certs.length)}
        >
          <FiChevronLeft />
        </button>
        <div className="cert-dots">
          {certs.map((_, i) => (
            <span
              key={i}
              className={`cert-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button
          className="cert-nav-btn"
          aria-label="Next certification"
          onClick={() => setIndex((i) => (i + 1) % certs.length)}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION HEAD
   ───────────────────────────────────────────── */
function SectionHead({ num, title, action }) {
  return (
    <div className="section-header reveal">
      <span className="section-num">{num}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
      {action}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [navScrolled, setNavScrolled]     = useState(false);
  const [lightboxCert, setLightboxCert]   = useState(null);
  const heroRef = useRef(null);
  const resumeUrl = "https://drive.google.com/file/d/1vQURsVAd9tj3SJ7SrtCbg9mUf7MWyMkL/view?usp=sharing";

  // Nav scroll styling
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close cert lightbox on Escape
  useEffect(() => {
    if (!lightboxCert) return;
    const onKey = (e) => { if (e.key === "Escape") setLightboxCert(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxCert]);

  // Active section tracking (highlights nav link)
  useEffect(() => {
    const ids = ["home", "about", "experience", "education", "projects", "skills", "achievements"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // Mouse-follow glare on project cards
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

  useReveal();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // ─── Colour tokens for inline section backgrounds ───
  const BG      = "#f2e4d0";
  const BG_DARK = "#e9d5bb";

  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      {/* ════════════════════════════════════════
          NAV
          ════════════════════════════════════════ */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => scrollTo("home")}>JG</div>

        <div className="nav-links">
          {[
            ["About",        "about"],
            ["Experience",   "experience"],
            ["Education",    "education"],
            ["Projects",     "projects"],
            ["Skills",       "skills"],
            ["Achievements", "achievements"],
          ].map(([label, id]) => (
            <span
              key={id}
              className={`nav-link ${activeSection === id ? "active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </span>
          ))}
        </div>

        <button className="nav-resume" onClick={() => window.open(resumeUrl, "_blank")}>
          <FiDownload /> RESUME
        </button>
      </nav>

      {/* ════════════════════════════════════════
          HERO
          ════════════════════════════════════════ */}
      <section id="home" className="hero" style={{ maxWidth: "none", padding: "0 40px" }} ref={heroRef}>

        {/* Ambient blobs */}
        <div className="hero-bg-blob" style={{ width: 500, height: 500, top: "-80px",  right: "5%",   opacity: 0.70 }} />
        <div className="hero-bg-blob" style={{ width: 260, height: 260, bottom: "60px", left: "-40px", opacity: 0.45, animationDelay: "-4s" }} />

        <div className="hero-inner">

          {/* Left – text */}
          <div>
            <p className="hero-eyebrow">👋 Hi there! I'm</p>
            <h1 className="hero-name">
              Jayanti<br /><em>Goyal</em>
            </h1>
            <p className="hero-subtitle">{DATA.subtitle}</p>
            <p className="hero-desc">{DATA.about}</p>
            <div className="hero-cta-row">
              <button className="btn-primary"  onClick={() => scrollTo("projects")}>View My Work →</button>
              <button className="btn-outline" onClick={() => scrollTo("contact")}><FiMail /> Get In Touch</button>
            </div>
            <div className="social-icon-row">
              <a className="social-icon-btn" href={DATA.github}   target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a className="social-icon-btn" href={DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a className="social-icon-btn" href={DATA.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
              <a className="social-icon-btn" href={DATA.codolio}  target="_blank" rel="noreferrer" aria-label="Codolio stats"><FiBarChart2 /></a>
              <a className="social-icon-btn" href={`mailto:${DATA.email}`} aria-label="Email"><FiMail /></a>
            </div>
          </div>

          {/* Right – image card */}
          <div className="hero-right">
            <div className="hero-image-card">
              <div className="hero-chip-badge"><FiCpu /></div>
              <div className="hero-scene">
                <img src={heroImage} alt="Illustration of Jayanti Goyal coding" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.5 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.12em", color: "#b09070", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #b09070, transparent)" }} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          ABOUT  (01) — bento row
          ════════════════════════════════════════ */}
      <section id="about" style={{ background: BG_DARK, maxWidth: "none", padding: "64px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <SectionHead num="01" title="About" />

          <div className="bento-row">
            <div className="bento-card reveal">
              <div className="bento-card-head"><FiUser /><h3>About Me</h3></div>
              <p className="bento-card-text">{DATA.about}</p>
              <button className="btn-outline btn-sm" onClick={() => scrollTo("about-details")}>
                More About Me <FiArrowUpRight />
              </button>
            </div>

            <div className="bento-card reveal reveal-delay-1">
              <div className="bento-card-head-row">
                <div className="bento-card-head"><FiShield /><h3>Certifications</h3></div>
                <button className="bento-head-link" onClick={() => scrollTo("certifications")}>View All <FiArrowUpRight /></button>
              </div>
              <CertCarousel certs={DATA.certifications.slice(0, 4)} onOpen={setLightboxCert} />
            </div>

            <div className="bento-card reveal reveal-delay-2">
              <div className="bento-card-head-row">
                <div className="bento-card-head"><FiCode /><h3>Tech Stack</h3></div>
                <button className="bento-head-link" onClick={() => scrollTo("skills")}>View All <FiArrowUpRight /></button>
              </div>
              <div className="tech-tile-grid">
                {TECH_PREVIEW.map((name) => <TechTile key={name} name={name} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ABOUT — full details ("More About Me" target)
          ════════════════════════════════════════ */}
      <section id="about-details" style={{ background: BG_DARK, maxWidth: "none", padding: "64px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <div className="about-details-grid">
            <div className="about-intro reveal">
              <h3>Hello! I'm<br /><em>Jayanti.</em></h3>
              <p>{DATA.about}</p>
              <button className="btn-primary" onClick={() => window.open(resumeUrl, "_blank")}>
                <FiDownload /> Download Resume
              </button>
            </div>
            <div className="about-info-stack reveal reveal-delay-1">
              <div className="bento-card" id="contact">
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
        </div>
      </section>

      {/* ════════════════════════════════════════
          EXPERIENCE  (02)
          ════════════════════════════════════════ */}
      <section id="experience" style={{ background: `linear-gradient(180deg, ${BG} 0%, ${BG_DARK} 100%)`, maxWidth: "none", padding: "64px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <SectionHead num="02" title="Experience" />
          <div className="entry-list">
            {DATA.experience.map((e, i) => (
              <div key={i} className={`entry-card reveal reveal-delay-${i + 1}`}>
                <div className="entry-card-meta">
                  <span className="entry-pill"><FiCalendar /> {e.period}</span>
                  <span className="entry-pill"><FiMapPin /> {e.location}</span>
                </div>
                <div className="entry-role">{e.role}</div>
                <div className="entry-org"><FiBriefcase /> {e.company}</div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EDUCATION  (03)
          ════════════════════════════════════════ */}
      <section id="education" style={{ background: BG_DARK, maxWidth: "none", padding: "64px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <SectionHead num="03" title="Education" />
          <div className="entry-list-grid">
            {DATA.education.map((ed, i) => (
              <div key={i} className={`entry-card reveal reveal-delay-${i + 1}`}>
                <div className="entry-card-meta">
                  <span className="entry-pill"><FiCalendar /> {ed.period}</span>
                  <span className="entry-pill"><FiMapPin /> {ed.location}</span>
                </div>
                <div className="entry-role">{ed.degree}</div>
                <div className="entry-org"><FiBookOpen /> {ed.institution}</div>
                <ul className="exp-bullets">
                  <li>{ed.detail}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROJECTS  (04)
          ════════════════════════════════════════ */}
      <section id="projects">
        <SectionHead
          num="04"
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

      {/* ════════════════════════════════════════
          SKILLS  (05)
          ════════════════════════════════════════ */}
      <section id="skills" style={{ background: BG_DARK, maxWidth: "none", padding: "64px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <SectionHead num="05" title="Skills & Stack" />
          <div className="skills-grid-v2">
            {Object.entries(DATA.skills).map(([group, items], i) => {
              const iconItems = items.filter((s) => ICON_MAP[s]);
              const tagItems = items.filter((s) => !ICON_MAP[s]);
              return (
                <div key={group} className={`bento-card reveal reveal-delay-${(i % 4) + 1}${WIDE_SKILL_GROUPS.includes(group) ? " skills-card-wide" : ""}`}>
                  <div className="bento-card-head"><FiCode /><h3>{group}</h3></div>
                  {iconItems.length > 0 && (
                    <div className="tech-tile-grid">
                      {iconItems.map((s) => <TechTile key={s} name={s} />)}
                    </div>
                  )}
                  {tagItems.length > 0 && (
                    <div className="skill-tag-row">
                      {tagItems.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACHIEVEMENTS  (06)
          ════════════════════════════════════════ */}
      <section id="achievements" style={{ maxWidth: "none", padding: "64px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <SectionHead num="06" title="Achievements" />
          <div className="ach-grid">
            {DATA.achievements.map((a, i) => (
              <div key={i} className={`ach-card reveal reveal-delay-${(i % 4) + 1}`}>
                <span className="ach-icon-circle">{a.icon}</span>
                <span className="ach-text">{boldify(a.text)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CERTIFICATIONS  (07) — "View All" target
          ════════════════════════════════════════ */}
      <section id="certifications" style={{ background: BG_DARK, maxWidth: "none", padding: "64px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <SectionHead num="07" title="Certifications" />
          <div className="cert-grid">
            {DATA.certifications.map((c, i) => (
              <div key={i} className={`cert-card reveal reveal-delay-${(i % 4) + 1}`}>
                <CertThumb cert={c} onOpen={setLightboxCert} />
                <div className="cert-title">{c.title}</div>
                {c.subtitle && <div className="cert-subtitle">{c.subtitle}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════ */}
      <div className="footer">
        <div className="footer-left">Jayanti Goyal · {new Date().getFullYear()}</div>
        <div className="footer-right">Built with React</div>
      </div>

      {/* ════════════════════════════════════════
          CERTIFICATE LIGHTBOX
          ════════════════════════════════════════ */}
      {lightboxCert && (
        <div className="lightbox-overlay" onClick={() => setLightboxCert(null)}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setLightboxCert(null)}>
            <FiX />
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxCert.image} alt={lightboxCert.title} />
            <figcaption>{lightboxCert.title}</figcaption>
          </figure>
        </div>
      )}

    </div>
  );
}
