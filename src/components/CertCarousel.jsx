import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CertThumb from "./CertThumb";

export default function CertCarousel({ certs, onOpen }) {
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
