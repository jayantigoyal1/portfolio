import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function SectionHead({ title, action }) {
  return (
    <div className="page-header reveal">
      <Link to="/" className="back-link"><FiArrowLeft /> Home</Link>
      <div className="section-header">
        <h1 className="section-title">{title}</h1>
        <div className="section-line" />
        {action}
      </div>
    </div>
  );
}
