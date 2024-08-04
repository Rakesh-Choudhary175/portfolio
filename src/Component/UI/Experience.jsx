function Experience() {
  const experienceData = [
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
              {exp.name}
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
