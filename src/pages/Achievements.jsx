import { DATA } from "../data";
import { useReveal } from "../hooks";
import { boldify } from "../utils";
import SectionHead from "../components/SectionHead";

export default function Achievements() {
  useReveal();

  const featured = DATA.achievements.filter((a) => a.featured);
  const rest = DATA.achievements.filter((a) => !a.featured);

  return (
    <section>
      <SectionHead title="Achievements" />

      {featured.length > 0 && (
        <div className="ach-featured-grid">
          {featured.map((a, i) => (
            <div key={i} className={`ach-featured-card reveal reveal-delay-${i + 1}`}>
              <span className="ach-featured-icon">{a.icon}</span>
              <span className="ach-featured-text">{boldify(a.text)}</span>
            </div>
          ))}
        </div>
      )}

      <div className="ach-grid">
        {rest.map((a, i) => (
          <div key={i} className={`ach-card reveal reveal-delay-${(i % 4) + 1}`}>
            <span className="ach-icon-circle">{a.icon}</span>
            <span className="ach-text">{boldify(a.text)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
