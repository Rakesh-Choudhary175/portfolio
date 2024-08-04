import { Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

function Protfolio({ data, i }) {
  const { img, title } = data;

  return (
    <div className="portfolio-item">
      <div className="portfolio-item-thumbnail">
        <img
          src={`/src/assets/img/portfolio/${img}.png`}
          alt="portfolio item thumb"
        />
      </div>
      <h3 className="portfolio-item-title">{title}</h3>
      <Link to={img}>
        <button type="button" className="btn view-project-btn">
          View Project
        </button>
      </Link>
      <div className="portfolio-item-details"></div>
    </div>
  );
}

export default Protfolio;
