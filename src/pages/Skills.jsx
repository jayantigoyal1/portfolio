import { FiCode } from "react-icons/fi";
import { DATA } from "../data";
import { ICON_MAP, WIDE_SKILL_GROUPS } from "../constants";
import { useReveal } from "../hooks";
import SectionHead from "../components/SectionHead";
import TechTile from "../components/TechTile";

export default function Skills() {
  useReveal();

  return (
    <section>
      <SectionHead title="Skills & Stack" />
      <div className="skills-grid-v2">
        {Object.entries(DATA.skills).map(([group, items], i) => {
          const iconItems = items.filter((s) => ICON_MAP[s]);
          const tagItems = items.filter((s) => !ICON_MAP[s]);
          return (
            <div
              key={group}
              className={`bento-card reveal reveal-delay-${(i % 4) + 1}${WIDE_SKILL_GROUPS.includes(group) ? " skills-card-wide" : ""}`}
            >
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
    </section>
  );
}
