import { Link } from "react-router-dom";

function Protfolio({ data }) {
  const { id, img, title } = data;

  return (
    <div className="portfolio-item">
      <div className="portfolio-item-thumbnail">
        <img src={img} alt="portfolio item thumb" />
      </div>
      <h3 className="portfolio-item-title">{title}</h3>
      <Link to={id}>
        <button type="button" className="btn view-project-btn">
          View Project
        </button>
      </Link>
      <div className="portfolio-item-details"></div>
    </div>
  );
}

export default Protfolio;
