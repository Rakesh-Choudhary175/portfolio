import { useContext } from "react";
import Hackathon from "../UI/Hackathon";
import { Context } from "../../Context";
import { hackathonData } from "../Data/Hackathon";

function HackathonPage() {
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
            <h2>Hackathons</h2>
          </div>
        </div>
        <div className="row">
          {hackathonData.map((data) => (
            <Hackathon data={data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HackathonPage;
