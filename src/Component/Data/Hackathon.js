import img1 from "../../assets/img/hackathon/1.jpg";
import img1_1 from "../../assets/img/hackathon/1-1.jpg";
import img1_2 from "../../assets/img/hackathon/1-2.jpg";
import img1_3 from "../../assets/img/hackathon/1-3.jpg";
import img1_4 from "../../assets/img/hackathon/1-4.jpg";
import img1_5 from "../../assets/img/hackathon/1-5.webm";
import img2 from "../../assets/img/hackathon/2.jpg";
import img2_1 from "../../assets/img/hackathon/2-1.jpg";

export const hackathonData = [
  {
    id: "1",
    img: [img1, img1_1, img1_2, img1_3, img1_4, img1_5],  
    title: "AIBoomi Hackathon",
    description: [
      "A 24-hour AI hackathon where we had to come with our own idea and build a MVP form scrach.",
      "Built a platform that suggests career paths for students based on - 'Academic subject scores', 'Co-curricular activities'",
      "Used a mathematical scoring model to mapped students to multiple career paths.",
      "This data was then fed to an AI system, allowing students and parents to chat with AI and explore - 'Career suitability', 'Future opportunities', 'Alternative career options'.",
    ],
    created: "31 January 2026",
    techUsed: "React, Spring, MySQL, OpenAI, FastRouter",
    role: "Fullstack",
    link: "https://github.com/Rakesh-Choudhary175/aibommi",
  },
  {
    id: "2",
    img: [img2,img2_1],
    title: "Cohesity Hackathon 2026",
    created: "11 February 2026",
    techUsed: "React, Flast, Neo4j, Gemini, Python",
    role: "Fullstack",
  },
  // {
  //   id: "1",
  //   img: img1,
  //   title: "Room management Website",
  //   description: [
  //     "A web application for a hotel room booking staff to manage all booking guests' check-in,check-out, money-paid status.",
  //     "Can change pricing/update pricing of the room.",
  //     "A dashboard that provides detailed insides of all data in the form of pie charts and graphs.",
  //     "Adding a new room with new data.",
  //     "Can delete any booking.",
  //     "Try it with these login credentials Email:-public@mail.com Password:-password",
  //   ],
  //   created: "2 August 2024",
  //   techUsed: "React, SupaBase, React-Router, React-query, React-Icons",
  //   role: "Fullstack",
  //   link: "https://room-booking-pi.vercel.app/",
  // },
];
