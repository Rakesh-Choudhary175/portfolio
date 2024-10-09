function Education() {
  const educationData = [
    {
      year: "2024 - Present",
      degree: "Master of technology",
      university: "COEP Technological University",
      collegeName: "College of Enginnering Pune",
    },
    {
      year: "2019 - 2023",
      degree: "bechelor of technology",
      university: "SPPU university",
      collegeName: "Smt. Kashibai Navale College of Engineering 8.9 CGPA",
    },
    {
      year: "2017 - 2019",
      degree: "HSC Board-12th",
      university: "Maharashtra State Board",
      collegeName: "Abhinav English Medium, And Junior College",
    },
    {
      year: "2017",
      degree: "SSC Board-10th",
      university: "Maharashtra State Board",
      collegeName: "Rajgad Dnyanpeeth DEMS",
    },
  ];

  return (
    <div className="tab-content activeOn" id="education">
      <div className="timeline">
        {educationData.map((data, i) => (
          <div className="timeline-item" key={i}>
            <span className="date">{data.year}</span>
            <h4>
              {data.degree} - <span>{data.university}</span>
            </h4>
            <p>{data.collegeName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
