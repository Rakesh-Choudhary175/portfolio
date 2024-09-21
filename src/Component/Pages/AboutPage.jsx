import { useContext, useState } from "react";
import Education from "../UI/Education";
import Experience from "../UI/Experience";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context";
import img from "../../assets/img/about-profile.png";
import cv from "../../../cv.pdf";

function AboutPage() {
  const [experience, setExperience] = useState(false);

  const discription =
    "As a dedicated software engineer, I thrive on the dynamic challenges of crafting efficient, scalable, and user-centric solutions. With a passion for technology and a keen eye for detail, I bring years of experience in designing and implementing robust software systems. My expertise spans across full-stack development, where I adeptly navigate through frontend frameworks, backend technologies, and database management systems to deliver seamless experiences. I am committed to staying abreast of emerging technologies, continuously honing my skills to tackle evolving industry demands. Whether collaborating in a team environment or leading projects independently, my goal remains the same: to innovate, streamline processes, and exceed expectations in every endeavor. Let's build the future together, one line of code at a time.";

  const skillData = [
    "html",
    "css",
    "javascript",
    "c++",
    "NextJS",
    "ReactJS",
    "React Native"
    "NodeJS",
    "Tailwind CSS",
    "Docker",
    "Java",
    "Python",
    "Git",
  ];

  const { navBar } = useContext(Context);

  return (
    <section
      className={`about-section sec-padding activeOn ${
        navBar ? "fade-out" : ""
      }`}
      // id="about"
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box">
              <img src={img} alt="about img" />
            </div>
          </div>
          <div className="about-text">
            <p>{discription}</p>
            <h3>skills</h3>
            <div className="skills">
              {skillData.map((skill, i) => (
                <div className="skill-item" key={i}>
                  {skill}
                </div>
              ))}
            </div>

            <div className="about-tabs">
              <button
                type="button"
                className={`tab-item ${experience ? "" : "activeOn"}`}
                onClick={() => {
                  if (experience === false) return;
                  setExperience(false);
                }}
              >
                education
              </button>
              <button
                type="button"
                className={`tab-item ${experience ? "activeOn" : ""}`}
                onClick={() => {
                  if (experience === true) return;
                  setExperience(true);
                }}
              >
                experience
              </button>
            </div>

            {!experience && <Education />}

            {experience && <Experience />}

            {/* CV add karan hai path mah  */}
            <a href={cv} target="_blank" className="btn">
              download CV
            </a>
            <NavLink to="/contact" className="btn link-item">
              contact me
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
