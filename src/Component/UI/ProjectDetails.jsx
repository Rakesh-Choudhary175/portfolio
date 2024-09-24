import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { portfolioData } from "../Data/Projects";

function ProjectDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { img, title, description, created, techUsed, role, link } =
    portfolioData.filter((el) => el.id === id)[0];

  return (
    <div className="portfolio-popup open">
      <div className="pp-inner">
        <div className="pp-content">
          <div className="pp-header">
            <button
              type="button"
              className="btn pp-close"
              onClick={() => navigate(-1)}
            >
              <IoClose />
            </button>
            <div className="pp-thumbnail">
              <img src={img} alt="pp-thumbnail" />
            </div>
            <h3>{title}</h3>
          </div>
          <div className="pp-body">
            <div className="description">
              <p>
                {description &&
                  description.map((dis, i) => <li key={i}>{dis}</li>)}
              </p>
            </div>
            <div className="general-info">
              <ul>
                <li>
                  Created - <span>{created}</span>
                </li>
                <li>
                  technologies used - <span>{techUsed}</span>
                </li>
                <li>
                  Role - <span>{role}</span>
                </li>
                <li>
                  View Online -
                  <span>
                    <a href={link} target="_blank">
                      Link
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
