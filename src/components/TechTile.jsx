import { ICON_MAP } from "../constants";

export default function TechTile({ name }) {
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
