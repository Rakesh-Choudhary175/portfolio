import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context";

function HomePage() {
  const { navBar } = useContext(Context);

  return (
    <section
      className={`home-section align-items-center activeOn ${
        navBar ? "fade-out" : ""
      }`}
      id="home"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello, I&apos;m</p>
            <h1>Rakesh Choudhary</h1>
            <h2>Software Engineer</h2>
            <NavLink to="/about" className="btn link-item">
              more about me
            </NavLink>
            <NavLink to="/protfolio" className="btn link-item">
              Portfolio
            </NavLink>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src="/src/assets/img/profile-img.png" alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
