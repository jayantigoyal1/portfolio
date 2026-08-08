import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { DATA } from "../data";
import { NAV_LINKS } from "../constants";

export default function Nav() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
      <NavLink to="/" className="nav-logo">JG</NavLink>

      <div className="nav-links">
        {NAV_LINKS.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <button className="nav-resume" onClick={() => window.open(DATA.resumeUrl, "_blank")}>
        <FiDownload /> RESUME
      </button>

      <button
        className="nav-hamburger"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {menuOpen && (
        <div className="nav-mobile-panel">
          {NAV_LINKS.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `nav-mobile-link ${isActive ? "active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
          <button
            className="nav-resume nav-mobile-resume"
            onClick={() => { window.open(DATA.resumeUrl, "_blank"); setMenuOpen(false); }}
          >
            <FiDownload /> RESUME
          </button>
        </div>
      )}
    </nav>
  );
}
