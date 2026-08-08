import { useState } from "react";
import { DATA } from "../data";
import { useReveal } from "../hooks";
import SectionHead from "../components/SectionHead";
import CertThumb from "../components/CertThumb";
import Lightbox from "../components/Lightbox";

export default function Certifications() {
  const [lightboxCert, setLightboxCert] = useState(null);
  useReveal();

  return (
    <section>
      <SectionHead title="Certifications" />
      <div className="cert-grid">
        {DATA.certifications.map((c, i) => (
          <div key={i} className={`cert-card reveal reveal-delay-${(i % 4) + 1}`}>
            <CertThumb cert={c} onOpen={setLightboxCert} />
            <div className="cert-title">{c.title}</div>
            {c.subtitle && <div className="cert-subtitle">{c.subtitle}</div>}
          </div>
        ))}
      </div>
      {lightboxCert && (
        <Lightbox image={lightboxCert.image} caption={lightboxCert.title} onClose={() => setLightboxCert(null)} />
      )}
    </section>
  );
}
