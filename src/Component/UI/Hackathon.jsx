import { Link } from "react-router-dom";

function Hackathon({ data }) {
  const { id, img, title } = data;

  return (
    <div className="portfolio-item">
      <div className="portfolio-item-thumbnail">
        <img src={img[0]} alt="portfolio item thumb" />
      </div>
      <h3 className="portfolio-item-title">{title}</h3>
      <Link to={id}>
        <button type="button" className="btn view-project-btn">
          View More
        </button>
      </Link>
      <div className="portfolio-item-details"></div>
    </div>
  );
}

export default Hackathon;
