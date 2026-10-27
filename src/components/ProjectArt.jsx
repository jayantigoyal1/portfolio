// Hand-drawn, theme-matched icon per project
export default function ProjectArt({ name }) {
  const stroke = "#2e1e0e";
  const paper = "#fff8ee";
  const cream = "#f4e6cd";
  const accent = "#c67c38";

  switch (name) {
    case "FocusGeek":
      return (
        <svg width="72" height="72" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M18 26c11-4 22-2 32 5v47c-10-7-21-9-32-5z" fill={paper} stroke={stroke} strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M82 26c-11-4-22-2-32 5v47c10-7 21-9 32-5z" fill={cream} stroke={stroke} strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M50 31v47" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M26 39h15M26 48h12M59 39h15M59 48h12" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="72" cy="67" r="13" fill={paper} stroke={stroke} strokeWidth="2.4" />
          <path d="M72 59v9l6 4" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
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
