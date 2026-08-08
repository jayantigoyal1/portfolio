import { FiAward, FiZoomIn } from "react-icons/fi";

export default function CertThumb({ cert, onOpen }) {
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
