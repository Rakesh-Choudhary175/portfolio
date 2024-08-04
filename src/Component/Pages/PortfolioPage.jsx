import { useContext } from "react";
import Protfolio from "../UI/Protfolio";
import { Context } from "../../Context";
import { portfolioData } from "../Data/Projects";

function PortfolioPage() {
  const { navBar } = useContext(Context);

  return (
    <section
      className={`portfolio-section sec-padding activeOn ${
        navBar ? "fade-out" : ""
      }`}
      id="portfolio"
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>recent work</h2>
          </div>
        </div>
        <div className="row">
          {portfolioData.map((data) => (
            <Protfolio data={data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
