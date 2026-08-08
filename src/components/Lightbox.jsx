import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function Lightbox({ image, caption, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>
        <FiX />
      </button>
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={caption} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}
