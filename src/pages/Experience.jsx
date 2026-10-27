import { FiCalendar, FiMapPin, FiBriefcase, FiExternalLink } from "react-icons/fi";
import { DATA } from "../data";
import { useReveal } from "../hooks";
import SectionHead from "../components/SectionHead";

export default function Experience() {
  useReveal();

  return (
    <section>
      <SectionHead title="Experience" />
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
            {e.certificateUrl && (
              <a
                className="entry-certificate-link"
                href={e.certificateUrl}
                target="_blank"
                rel="noreferrer"
              >
                View internship certificate <FiExternalLink aria-hidden="true" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
