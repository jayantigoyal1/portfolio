// ─────────────────────────────────────────────────────────────────
//  Portfolio.jsx  –  Jayanti Goyal
//
//  Setup:
//    1. npm create vite@latest my-portfolio -- --template react
//    2. cd my-portfolio && npm install
//    3. Replace src/App.jsx content with this file
//    4. Replace src/index.css with the provided index.css
//    5. In src/main.jsx make sure you have: import './index.css'
//    6. npm run dev
// ─────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   DATA  –  edit anything here to update the site
   ───────────────────────────────────────────── */
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
      emoji: "📝",
      tagline: "AI-powered document intelligence platform for classification, information extraction, and document Q&A",
      tech: ["Python", "PyTorch", "Hugging Face Transformers", "LayoutLMv3", "Tesseract OCR", "Streamlit"],
      desc: "Analyses scanned documents using OCR and multimodal transformers, classifying files across 16 document categories with 78.5% accuracy, extracting key entities via NER, and enabling visual question answering through an end-to-end document understanding workflow.",
      repo: "https://github.com/jayantigoyal1/DocIntel-AI",
      demo: "https://huggingface.co/spaces/jayantigoyal/docintel-ai",
      tags: ["FULLSTACK", "Transformers", "Streamlit"],
    },
    {
      name: "TopCorner",
      emoji: "⚽",
      tagline: "Live football predictions & private leagues",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind"],
      desc: "Engineered a full-stack app with 15+ REST endpoints, aggregating live match data across 6 major leagues. Features an automated 3-tier scoring engine with real-time leaderboard updates inside invite-code leagues.",
      repo: "https://github.com/jayantigoyal1/TopCorner",
      demo: "https://top-corner.vercel.app/",
      tags: ["FULLSTACK", "SPORTS", "REST API"],
    },
    {
      name: "ASL Translator",
      emoji: "🤟",
      tagline: "Real-time sign language → 8 languages",
      tech: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "NumPy"],
      desc: "Deep-learning pipeline trained on 2,600+ gesture samples achieving 85%+ accuracy for 26 ASL alphabets, with multilingual output across eight Indian regional languages.",
      repo: "https://github.com/jayantigoyal1/ASL_Translator",
      demo: null,
      tags: ["ML", "COMPUTER VISION", "NLP"],
    },
    {
      name: "EcoVive",
      emoji: "🌿",
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
    { icon: "💡", text: "600+ problems solved on LeetCode, CodeChef & Codeforces" },
    { icon: "🎓", text: "Selected for McKinsey Forward Program 2026 by McKinsey & Company." },
    { icon: "🏆", text: "3rd Place (80+ teams) – Mobile App Dev Hackathon, IGDTUW" },
    { icon: "🥇", text: "Ranked 1st – MERN Stack Cohort, MSC Summer Bootcamp 2025" },
    { icon: "🥇", text: "Ranked 1st – Competitive Programming Cohort, GDG IGDTUW" },
    { icon: "🏅", text: "5th Place (500+ participants) – IEEE Open Source Week 2025" },
    { icon: "🎓", text: "SheCodes Foundation Scholar 2024" },
    { icon: "💡", text: "Top 50: AlgoVerse 2025 conducted by HackWithIndia IGDTUW" },
    { icon: "🥋", text: "2nd Place – Taekwondo (Poomsae), Sangram 2025, IIT Roorkee" },
  ],

  certifications: [
    "CS50P – Introduction to Programming with Python (Harvard)",
    "Machine Learning – DeepLearning.AI / Stanford Online / Coursera",
    "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
  ],

  education: [
    {
      institution: "Indira Gandhi Delhi Technical University for Women",
      degree: "B.Tech – Computer Science & Engineering",
      period: "2024 – 2028",
      location: "Delhi, India",
      detail: "CGPA: 8.92",
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
   MAIN COMPONENT
   ───────────────────────────────────────────── */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [navScrolled, setNavScrolled]     = useState(false);
  const heroRef = useRef(null);

  // Nav scroll styling
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        {/* ── Replace the alert with: window.open("/resume.pdf", "_blank") ── */}
        <button className="nav-resume" onClick={() => alert("Link your resume PDF here!")}>
          RESUME
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
            <p className="hero-eyebrow">✦ Available for opportunities</p>
            <h1 className="hero-name">
              Jayanti<br /><em>Goyal</em>
            </h1>
            <p className="hero-subtitle">{DATA.subtitle}</p>
            <div className="hero-cta-row">
              <button className="btn-primary"  onClick={() => scrollTo("projects")}>View Projects</button>
              <a      className="btn-outline"   href={`mailto:${DATA.email}`}>Get In Touch</a>
            </div>
          </div>

          {/* Right – animated room illustration */}
          <div className="hero-scene">
            <svg viewBox="0 0 520 460" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <radialGradient id="roomGlow"   cx="55%" cy="45%" r="50%">
                  <stop offset="0%"   stopColor="#f5d49a" stopOpacity="0.55"/>
                  <stop offset="100%" stopColor="#e9d5bb" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="lampGlow"   cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#fce8b0" stopOpacity="0.9"/>
                  <stop offset="60%"  stopColor="#f5c97a" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="#e8a96a" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#a8d4f5" stopOpacity="0.55"/>
                  <stop offset="100%" stopColor="#7bb8e8" stopOpacity="0"/>
                </radialGradient>
                <filter id="softBlur"><feGaussianBlur stdDeviation="2.5"/></filter>

                <linearGradient id="wallGrad"   x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"   stopColor="#ecdcc8"/>
                  <stop offset="100%" stopColor="#e0c9ae"/>
                </linearGradient>
                <linearGradient id="deskGrad"   x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#c8956a"/>
                  <stop offset="100%" stopColor="#a0714a"/>
                </linearGradient>
                <linearGradient id="laptopBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#d8c4a8"/>
                  <stop offset="100%" stopColor="#c4a882"/>
                </linearGradient>
                <linearGradient id="laptopLid"  x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#cdb898"/>
                  <stop offset="100%" stopColor="#b89d7a"/>
                </linearGradient>
                <linearGradient id="cupGrad"    x1="0" y1="0" x2="0.5" y2="1">
                  <stop offset="0%"   stopColor="#8b5e38"/>
                  <stop offset="100%" stopColor="#6b3f20"/>
                </linearGradient>
                <linearGradient id="bookGrad1"  x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#c9735a"/>
                  <stop offset="100%" stopColor="#a85845"/>
                </linearGradient>
                <linearGradient id="bookGrad2"  x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#7a9e7e"/>
                  <stop offset="100%" stopColor="#5f8463"/>
                </linearGradient>
                <linearGradient id="bookGrad3"  x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#e8c85a"/>
                  <stop offset="100%" stopColor="#c9a93e"/>
                </linearGradient>
                <linearGradient id="plantPot"   x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#b07850"/>
                  <stop offset="100%" stopColor="#8a5a35"/>
                </linearGradient>
                <linearGradient id="shelfGrad"  x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#c09070"/>
                  <stop offset="100%" stopColor="#a07050"/>
                </linearGradient>
              </defs>

              {/* Room bg */}
              <rect width="520" height="460" fill="url(#wallGrad)" rx="20"/>
              <ellipse cx="390" cy="90" rx="180" ry="140" fill="url(#roomGlow)" className="scene-glow"/>
              <rect x="30" y="30" width="460" height="290" rx="14" fill="none" stroke="#d4b898" strokeWidth="1.5" opacity="0.5"/>

              {/* Shelf */}
              <rect x="280" y="70" width="180" height="10" rx="4" fill="url(#shelfGrad)"/>
              <rect x="286" y="78" width="168" height="4"  fill="#8a6040" opacity="0.3"/>
              <path d="M292 80 L292 100 Q292 104 296 104 L300 104" stroke="#a07050" strokeWidth="2" fill="none"/>
              <path d="M448 80 L448 100 Q448 104 444 104 L440 104" stroke="#a07050" strokeWidth="2" fill="none"/>

              {/* Succulent */}
              <ellipse cx="310" cy="68" rx="12" ry="4" fill="#7aab7e" opacity="0.8"/>
              <path d="M305 68 Q308 50 310 45 Q312 50 315 68" fill="#5a8f5e" opacity="0.9"/>
              <path d="M302 66 Q308 55 310 52 Q305 58 302 66" fill="#7aab7e" opacity="0.7"/>
              <path d="M318 66 Q312 55 310 52 Q315 58 318 66" fill="#7aab7e" opacity="0.7"/>
              <rect x="302" y="67" width="16" height="12" rx="3" fill="url(#plantPot)"/>
              <ellipse cx="310" cy="67" rx="8" ry="2.5" fill="#9a6848"/>

              {/* Globe */}
              <circle cx="350" cy="62" r="14" fill="#c4d8e8" opacity="0.4"/>
              <circle cx="350" cy="62" r="14" fill="none" stroke="#a08060" strokeWidth="1.5" opacity="0.5"/>
              <ellipse cx="350" cy="62" rx="14" ry="4" fill="none" stroke="#a08060" strokeWidth="1" opacity="0.35"/>
              <line x1="350" y1="48" x2="350" y2="76" stroke="#a08060" strokeWidth="1" opacity="0.35"/>
              <rect x="344" y="75" width="12" height="4" rx="2" fill="#9a7050"/>

              {/* Photo frame */}
              <rect x="380" y="45" width="36" height="28" rx="3" fill="#e8d5be" stroke="#c4a07a" strokeWidth="2"/>
              <rect x="384" y="49" width="28" height="20" rx="2" fill="#d4c0a0" opacity="0.6"/>
              <polygon points="384,69 396,55 408,69" fill="#c09070" opacity="0.5"/>
              <polygon points="394,69 402,60 412,69" fill="#a07050" opacity="0.4"/>

              {/* String lights */}
              <path d="M60 30 Q120 50 180 38 Q250 24 320 42 Q380 56 460 35" fill="none" stroke="#c8a060" strokeWidth="1.2" opacity="0.45"/>
              {[80, 150, 220, 300, 380, 440].map((x, i) => (
                <g key={i}>
                  <line x1={x} y1={i%2===0?38:44} x2={x} y2={i%2===0?52:58} stroke="#c8a060" strokeWidth="0.8" opacity="0.5"/>
                  <ellipse cx={x} cy={i%2===0?55:61} rx="4" ry="5" fill="#f5e090" opacity="0.75"/>
                  <ellipse cx={x} cy={i%2===0?55:61} rx="8" ry="8" fill="#fce89a" opacity="0.18" filter="url(#softBlur)"/>
                </g>
              ))}

              {/* Desk */}
              <rect x="40"  y="310" width="440" height="18" rx="5" fill="url(#deskGrad)"/>
              <rect x="40"  y="326" width="440" height="5"  fill="#8a5a35" opacity="0.35"/>
              <rect x="60"  y="328" width="14"  height="90" rx="4" fill="#a07040"/>
              <rect x="446" y="328" width="14"  height="90" rx="4" fill="#a07040"/>

              {/* Stacked books */}
              <g transform="translate(65,278)">
                <rect x="0" y="22" width="58" height="12" rx="2" fill="url(#bookGrad3)"/>
                <rect x="0" y="22" width="6"  height="12" rx="1" fill="#b8902e"/>
                <text x="10" y="31" fontSize="5" fill="#fff8e0" opacity="0.7" fontFamily="serif">PYTHON</text>
                <rect x="2" y="11" width="54" height="12" rx="2" fill="url(#bookGrad2)"/>
                <rect x="2" y="11" width="6"  height="12" rx="1" fill="#4a7050"/>
                <text x="12" y="20" fontSize="5" fill="#f0fff0" opacity="0.7" fontFamily="serif">DESIGN</text>
                <rect x="4" y="0"  width="50" height="12" rx="2" fill="url(#bookGrad1)"/>
                <rect x="4" y="0"  width="6"  height="12" rx="1" fill="#884533"/>
                <text x="14" y="9"  fontSize="5" fill="#fff0ee" opacity="0.7" fontFamily="serif">ALGO</text>
              </g>

              {/* Laptop */}
              <g transform="translate(155,175)">
                <g className="scene-laptop">
                  <ellipse cx="95" cy="85" rx="80" ry="55" fill="url(#screenGlow)" filter="url(#softBlur)" className="scene-glow"/>
                  <rect x="20" y="10"  width="150" height="100" rx="8" fill="url(#laptopLid)"/>
                  <rect x="26" y="16"  width="138" height="88"  rx="6" fill="#2a1e12"/>
                  <rect x="29" y="19"  width="132" height="82"  rx="5" fill="#1a2535" className="scene-screen"/>
                  {[0,1,2,3,4,5,6].map(i => (
                    <rect key={i}
                      x={35 + (i%3)*2} y={27 + i*10}
                      width={20 + (i*13)%55} height="3.5" rx="1.5"
                      fill={i%3===0 ? "#7dd3b0" : i%3===1 ? "#f0a060" : "#a0c8f0"}
                      opacity="0.75"
                    />
                  ))}
                  <rect x="90" y="87" width="2" height="8" rx="1" fill="#7dd3b0" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite"/>
                  </rect>
                  <circle cx="95" cy="19" r="2" fill="#3a3028"/>
                  <rect x="18"  y="108" width="154" height="6"  rx="2" fill="#b8a080"/>
                  <rect x="10"  y="113" width="170" height="20" rx="5" fill="url(#laptopBody)"/>
                  {[0,1,2].map(row =>
                    Array.from({ length: 10 - row }).map((_, col) => (
                      <rect key={`k${row}-${col}`}
                        x={22 + col*14 + row*7} y={116 + row*5}
                        width="11" height="3.5" rx="1"
                        fill="#d0b890" opacity="0.6"
                      />
                    ))
                  )}
                </g>
              </g>

              {/* Coffee cup */}
              <g transform="translate(355,250)">
                <g className="scene-cup">
                  <path className="scene-steam-1" d="M15 18 Q12 10 15 4 Q18 -2 15 -8"  fill="none" stroke="#d4a060" strokeWidth="1.8" strokeLinecap="round" opacity="0"/>
                  <path className="scene-steam-2" d="M25 20 Q28 11 25 4 Q22 -3 25 -10" fill="none" stroke="#d4a060" strokeWidth="1.8" strokeLinecap="round" opacity="0"/>
                  <path className="scene-steam-3" d="M35 18 Q32 9 35 3 Q38 -3 35 -9"   fill="none" stroke="#d4a060" strokeWidth="1.8" strokeLinecap="round" opacity="0"/>
                  <ellipse cx="25" cy="62" rx="32" ry="7" fill="#9a7050" opacity="0.7"/>
                  <ellipse cx="25" cy="60" rx="30" ry="6" fill="#b08560"/>
                  <path d="M5 28 Q3 60 25 62 Q47 60 45 28 Z" fill="url(#cupGrad)"/>
                  <ellipse cx="25" cy="28" rx="20" ry="5"  fill="#9a6848"/>
                  <ellipse cx="25" cy="29" rx="17" ry="4"  fill="#4a2c10"/>
                  <path d="M18 28 Q25 24 32 28 Q29 31 25 30 Q21 31 18 28" fill="none" stroke="#c49060" strokeWidth="1.2" opacity="0.6"/>
                  <path d="M44 35 Q58 35 58 46 Q58 57 44 55" fill="none" stroke="#7a4a28" strokeWidth="4" strokeLinecap="round"/>
                </g>
              </g>

              {/* Desk plant */}
              <g transform="translate(430,248)">
                <path d="M20 32 Q8 18 14 5 Q22 18 20 32"  fill="#6a9e6e" opacity="0.85"/>
                <path d="M20 32 Q32 18 26 5 Q18 18 20 32" fill="#5a8f5e" opacity="0.85"/>
                <path d="M20 32 Q6 24 10 12"              fill="#7ab87e" opacity="0.6"/>
                <path d="M20 32 Q34 24 30 12"             fill="#7ab87e" opacity="0.6"/>
                <line x1="20" y1="32" x2="20" y2="40" stroke="#6a7a4e" strokeWidth="2"/>
                <path d="M10 40 Q10 58 20 60 Q30 58 30 40 Z" fill="url(#plantPot)"/>
                <ellipse cx="20" cy="40" rx="10" ry="3"   fill="#c09070"/>
                <ellipse cx="20" cy="40" rx="8"  ry="2.5" fill="#5a3a1a"/>
              </g>

              {/* Pencil holder */}
              <g transform="translate(415,268)">
                <rect x="0" y="0" width="22" height="30" rx="4" fill="#b08560"/>
                <rect x="0" y="0" width="22" height="6"  rx="3" fill="#c09870"/>
                <rect x="4"  y="-18" width="3.5" height="22" rx="1" fill="#f0c040"/>
                <polygon points="4,-18 7.5,-18 5.75,-26" fill="#e8b838"/>
                <rect x="4"  y="-18" width="3.5" height="3" fill="#f0a0a0"/>
                <rect x="10" y="-14" width="3.5" height="18" rx="1" fill="#a0c8f0"/>
                <polygon points="10,-14 13.5,-14 11.75,-22" fill="#88b8e0"/>
                <rect x="10" y="-14" width="3.5" height="3" fill="#f0d0a0"/>
                <rect x="16" y="-10" width="3"   height="14" rx="1" fill="#c0c0c0"/>
                <polygon points="16,-10 19,-10 17.5,-17" fill="#a8a8a8"/>
              </g>

              {/* Notebook */}
              <g transform="translate(70,295)">
                <rect x="0" y="0" width="70" height="18" rx="3" fill="#e8d4b8"/>
                <rect x="0" y="0" width="8"  height="18" rx="2" fill="#c4a078"/>
                {[4,8,12].map(y => <line key={y} x1="12" y1={y} x2="66" y2={y} stroke="#c4a878" strokeWidth="0.8" opacity="0.5"/>)}
                {[10,20,30,40,50,60].map(x => (
                  <circle key={x} cx={x} cy={-2} r="2.5" fill="none" stroke="#9a7850" strokeWidth="1.2" opacity="0.6"/>
                ))}
              </g>

              {/* Desk lamp */}
              <g transform="translate(465,90)">
                <ellipse cx="10" cy="95" rx="55" ry="45" fill="url(#lampGlow)" filter="url(#softBlur)" className="scene-glow"/>
                <ellipse cx="10" cy="218" rx="18" ry="5" fill="#9a7050"/>
                <rect x="5" y="165" width="10" height="55" rx="4" fill="#b08060"/>
                <path d="M10 165 Q-15 130 -5 95" fill="none" stroke="#b08060" strokeWidth="7" strokeLinecap="round"/>
                <path d="M-28 82 Q-5 60 18 82 L12 100 Q-5 108 -22 100 Z" fill="#c8a060"/>
                <path d="M-28 82 Q-5 60 18 82" fill="none" stroke="#e0b870" strokeWidth="2"/>
                <ellipse cx="-5" cy="92" rx="10" ry="10" fill="#fce890" opacity="0.9"/>
                <ellipse cx="-5" cy="92" rx="22" ry="22" fill="#fce890" opacity="0.3" filter="url(#softBlur)"/>
              </g>

              {/* Keyboard */}
              <g transform="translate(195,302)" opacity="0.7">
                <rect x="0" y="0" width="130" height="12" rx="3" fill="#d0bea0"/>
                {[0,1,2].map(row =>
                  Array.from({ length: 12 - row }).map((_, col) => (
                    <rect key={`kb${row}-${col}`}
                      x={4 + col*10 + row*5} y={1 + row*4}
                      width="8" height="3" rx="1"
                      fill="#c4ac88" opacity="0.8"
                    />
                  ))
                )}
              </g>

              {/* Mouse */}
              <g transform="translate(336,301)">
                <rect x="0" y="0" width="20" height="30" rx="10" fill="#c8b090"/>
                <line x1="10" y1="0"  x2="10" y2="14" stroke="#a89070" strokeWidth="1.2"/>
                <circle cx="10" cy="18" r="2" fill="#a89070" opacity="0.6"/>
              </g>

              {/* Floor shadow */}
              <ellipse cx="260" cy="418" rx="220" ry="14" fill="#a07840" opacity="0.10"/>
            </svg>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.5 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.12em", color: "#b09070", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #b09070, transparent)" }} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          ABOUT  (01)
          ════════════════════════════════════════ */}
      <section id="about" style={{ background: BG_DARK, maxWidth: "none", padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <div className="section-header reveal">
            <span className="section-num">01</span>
            <h2 className="section-title">About</h2>
            <div className="section-line" />
          </div>
          <div className="about-grid">
            <div className="about-text-block reveal">
              <h3>Hello! I'm<br /><em>Jayanti.</em></h3>
              <p>{DATA.about}</p>
              <div style={{ marginTop: 28 }}>
                {/* Replace alert with: window.open("/resume.pdf", "_blank") */}
                <button className="btn-primary" onClick={() => alert("Link your resume PDF here!")}>
                  Download Resume
                </button>
              </div>
            </div>
            <div className="about-info-cards reveal reveal-delay-2">
              <div className="info-card">
                <div className="info-card-label">Contact</div>
                <div className="info-card-content">
                  <a href={`mailto:${DATA.email}`}>{DATA.email}</a>
                </div>
                <div className="social-row">
                  <a className="social-btn" href={DATA.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  <a className="social-btn" href={DATA.github}   target="_blank" rel="noreferrer">GitHub</a>
                  <a className="social-btn" href={DATA.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
                  <a className="social-btn" href={DATA.codechef}  target="_blank" rel="noreferrer">CodeChef</a>
                  <a className="social-btn" href={DATA.codeforces}  target="_blank" rel="noreferrer">Codeforces</a>
                  <a className="social-btn" href={DATA.codolio}  target="_blank" rel="noreferrer">Codolio</a>
                </div>
              </div>
              <div className="info-card">
                <div className="info-card-label">Certifications</div>
                <div className="cert-list">
                  {DATA.certifications.map((c, i) => <div key={i} className="cert-item">{c}</div>)}
                </div>
              </div>
              <div className="info-card">
                <div className="info-card-label">Beyond Code</div>
                <div className="info-card-content">
                  Taekwondo Athlete | General Secretary at AVIRA (Martial Arts Society, IGDTUW) | Competitive Programmer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EXPERIENCE  (02)
          ════════════════════════════════════════ */}
      <section id="experience" style={{ background: `linear-gradient(180deg, ${BG} 0%, ${BG_DARK} 100%)`, maxWidth: "none", padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <div className="section-header reveal">
            <span className="section-num">02</span>
            <h2 className="section-title">Experience</h2>
            <div className="section-line" />
          </div>
          <div className="exp-timeline">
            {DATA.experience.map((e, i) => (
              <div key={i} className={`exp-item reveal reveal-delay-${i + 1}`}>
                <div>
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-location">{e.location}</div>
                </div>
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EDUCATION  (03)
          ════════════════════════════════════════ */}
      <section id="education" style={{ background: BG_DARK, maxWidth: "none", padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <div className="section-header reveal">
            <span className="section-num">03</span>
            <h2 className="section-title">Education</h2>
            <div className="section-line" />
          </div>
          <div className="exp-timeline">
            {DATA.education.map((ed, i) => (
              <div key={i} className={`exp-item reveal reveal-delay-${i + 1}`}>
                <div>
                  <div className="exp-period">{ed.period}</div>
                  <div className="exp-location">{ed.location}</div>
                </div>
                <div>
                  <div className="exp-role">{ed.degree}</div>
                  <div className="exp-company">{ed.institution}</div>
                  <ul className="exp-bullets">
                    <li>{ed.detail}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROJECTS  (04)
          ════════════════════════════════════════ */}
      <section id="projects">
        <div className="section-header reveal">
          <span className="section-num">04</span>
          <h2 className="section-title">Selected Projects</h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {DATA.projects.map((p, i) => (
            <div key={p.name} className={`project-card reveal reveal-delay-${i + 1}`}>
              <span className="project-emoji">{p.emoji}</span>
              <div className="project-name">{p.name}</div>
              <div className="project-tagline">{p.tagline}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.10em",
                      color: "#b09070",
                      textTransform: "uppercase"
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {p.repo && <a className="project-link" href={p.repo} target="_blank" rel="noreferrer">↗ GitHub</a>}
                {p.demo && <a className="project-link" href={p.demo} target="_blank" rel="noreferrer">↗ Live Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SKILLS  (05)
          ════════════════════════════════════════ */}
      <section id="skills" style={{ background: BG_DARK, maxWidth: "none", padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <div className="section-header reveal">
            <span className="section-num">05</span>
            <h2 className="section-title">Skills & Stack</h2>
            <div className="section-line" />
          </div>
          <div className="skills-grid">
            {Object.entries(DATA.skills).map(([group, items], i) => (
              <div key={group} className={`skill-group reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="skill-group-name">{group}</div>
                <div className="skill-tags">
                  {items.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACHIEVEMENTS  (06)
          ════════════════════════════════════════ */}
      <section id="achievements" style={{ maxWidth: "none", padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>
          <div className="section-header reveal">
            <span className="section-num">06</span>
            <h2 className="section-title">Achievements</h2>
            <div className="section-line" />
          </div>
          <div className="ach-grid">
            {DATA.achievements.map((a, i) => (
              <div key={i} className={`ach-card reveal reveal-delay-${(i % 4) + 1}`}>
                <span className="ach-icon">{a.icon}</span>
                <span className="ach-text">{a.text}</span>
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
      </div>

    </div>
  );
}