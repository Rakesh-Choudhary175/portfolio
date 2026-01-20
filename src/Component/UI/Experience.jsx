import imgSrc from "../../assets/img/cohesity-logo-black-green.svg";

function Experience() {
  const experienceData = [
    {
      projectType: "Open Source Engineer",
      name: "Cohesity",
      dis: [
        "June 2025 - Present",
        "Gained hands-on experience with Black Duck for open-source software (OSS) compliance analysis, including license identification and risk assessment.",
        "Developed automation scripts to create, update, and delete Jira tickets, streamlining issue tracking and compliance workflows.",
        "Designed a graph database schema to efficiently store and manage OSS metadata, enabling better dependency and license relationship analysis.",
        "Built and automated end-to-end OSS compliance workflows, covering source code scanning, license detection, and compliance verification.",
        "Integrated OSS compliance tools into user-friendly web interfaces using Python and JavaScript-based web frameworks to improve accessibility for non-technical users.",
        "Significantly reduced manual OSS review efforts by automating the detection and exclusion of previously reviewed and approved OSS components.",
      ],
      image: "src/assets/img/cohesity-logo-black-green.svg",
    },
    {
      projectType: "Freelancing Project",
      name: "WebSite Developed for a Interior Design Company",
      dis: [
        "Designed, developed, and deployed a website for Specterior Design – one of the leading Interior Designs in Pune.",
        "Used of SCSS/Sass to streamline CSS development and improve code maintainability.",
        "Developed contact form which will send message direct to Admin's WHATSAPP.",
        "Implemented Video Background for Home page.",
      ],
      links: [
        {
          name: "Link v1 :",
          link: "https://rakesh-choudhary175.github.io/SpecteriorDesign.github.io/",
          dis: "www.spectoriordesign.com",
        },
        {
          name: "Link v2 :",
          link: "https://rakesh-choudhary175.github.io/Specterior-Designs-2.github.io/",
          dis: "www.spectoriordesign.com",
        },
      ],
    },
    {
      projectType: "Freelancing Project",
      name: "GyaanDock a online coding problem solving website",
      dis: [
        "Designed, developed, and deployed a full-stack online coding problem solving website.",
        "Used ReactJS & Bootstrap for FrontEnd of the website.",
        "Used NodeJS & MongoDB for BackEnd.",
        "Implemented Authentication, Authorization, JWT.",
        "Admin can add new questions, delete, update any question.",
        "Implemented Sorting, Filtering & Pagination on questions.",
        "After solving any question users score will get updated.",
        "Used Judge API for code compilation and for getting code output.",
      ],
      links: [
        {
          name: "FrontEnd Codebase :",
          link: "https://github.com/Rakesh-Choudhary175/GyaanDockFrontEnd",
          dis: "GyaanDock FrontEnd",
        },
        {
          name: "BackEnd Codebase :",
          link: "https://github.com/Rakesh-Choudhary175/GyaanDockBackend",
          dis: "GyaanDock BackEnd",
        },
      ],
    },
  ];

  return (
    <div className="tab-content activeOn" id="experience">
      <div className="timeline">
        {experienceData.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <span className="date">{exp.projectType}</span>
            <h4>
              {exp.name !== "Cohesity" && <>{exp.name} </>}
              {exp.image && (
                <img
                  src={imgSrc}
                  alt={exp.name + " logo"}
                  style={{ maxWidth: "150px", margin: "10px 0" }}
                />
              )}
              <span></span>
            </h4>

            {exp.dis && exp.dis.map((dis, disi) => <p key={disi}>{dis}</p>)}

            {exp.links &&
              exp.links.map((link, linki) => (
                <h4 key={linki}>
                  {link.name}
                  <a href={link.link} target="_blank">
                    {link.dis}
                  </a>
                </h4>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
