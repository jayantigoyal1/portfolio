import { FiCalendar, FiMapPin, FiBookOpen } from "react-icons/fi";
import { DATA } from "../data";
import { useReveal } from "../hooks";
import SectionHead from "../components/SectionHead";

export default function Education() {
  useReveal();

  return (
    <section>
      <SectionHead title="Education" />
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
    </section>
  );
}
