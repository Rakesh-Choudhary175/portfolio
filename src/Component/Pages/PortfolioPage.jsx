import { useContext } from "react";
import Protfolio from "../UI/Protfolio";
import { Context } from "../../Context";

function PortfolioPage() {
  const portfolioData = [
    {
      img: "1",
      title: "Interior WebSite",
      description: [
        "Designed, developed, and deployed a website for Specterior Design – one of the leading Interior Designs in Pune.",
        "Used of SCSS/Sass to streamline CSS development and improve code maintainability.",
        "Developed contact form which will send message direct to Admin's WHATSAPP.",
        "Implemented Video Background for Home page.",
      ],
      created: "15 July 2021",
      techUsed: "HTML, CSS, Javascript",
      role: "Frontend",
      link: "https://rakesh-choudhary175.github.io/Specterior-Designs-2.github.io/",
    },
    {
      img: "2",
      title: "GyaanDock",
      description: [
        "Designed, developed, and deployed a full-stack online coding problem solving website.",
        "Used ReactJS & Bootstrap for FrontEnd of the website.",
        "Used NodeJS & MongoDB for BackEnd.",
        "Implemented Authentication, Authorization, JWT.",
        "Admin can add new questions, delete, update any question.",
        "Implemented Sorting, Filtering & Pagination on questions.",
        "After solving any question users score will get updated.",
        "Used Judge API for code compilation and for getting codeoutput.",
      ],
      created: "4 Dec 2023",
      techUsed: "ReatJS, Bootstrap, NodeJS, Express, MongoDB, MVC",
      role: "FullStack ",
      link: "https://github.com/Rakesh-Choudhary175/GyaanDockBackend",
    },
    {
      img: "3",
      title: "Natours a Tourism Website",
      description: [
        "Designed, developed, and deployed a full-stack online Tour Booking website.",
        "Used Pug files & CSS for FrontEnd of the website.",
        "Used NodeJS & MongoDB for BackEnd.",
        "Implemented Authentication, Authorization, JWT.",
        "Admin can add new Tours, delete, update any Tour data.",
        "Implemented Profile Image uploads and and setting profile photos.",
        "Implemented Payment option to book tours.",
      ],
      created: "15 May 2023",
      techUsed: "NodeJS, Express, MongoDB, MVC, Pug, CSS",
      role: "FullStack ",
      link: "https://github.com/Rakesh-Choudhary175/Natours",
    },
    {
      img: "4",
      title: "Forkify Food Recipe Website",
      description: [
        "Using 3rd Party API to get food recipe data all render it on website.",
        "Dividing results and showing it no multiple pages based on no of response",
        "Implemented bookmark feature in which user can save its recipe on brouser memory and can check it when ever required",
        "Changing quantity of ingredients based on number of servings",
        "Smooth and responsive user interface",
      ],
      created: "12 Feb 2024",
      techUsed: "HTML, CSS, Javascript ",
      role: "frontend ",
      link: "https://github.com/Rakesh-Choudhary175/forkify",
    },
    {
      img: "5",
      title: "Bankist Banking Website",
      description: [
        "Used Javascript to manipulate data of the user bank account",
        "Add and remove money and update it on website in real time",
        "Implemented Loan feature based on 10% of user maxminum deposite",
        "User can Send money to another User based on Id and money will be Updated on boths user account",
      ],
      created: "25 Dec 2023",
      techUsed: "HTML, CSS, Javascript",
      role: "frontend ",
      link: "https://rakesh-choudhary175.github.io/bankist/",
    },
    {
      img: "6",
      title: "Dice Game WebSite",
      description: [
        "Implemented a user interactive game of dice for 2 users to play at a time.",
        " A dice is role on click and a random no between 1 to 6 is generated and dice is formed.",
        "As user keep on rolling dice his temporary score is incraesed and he can hold that score anytime and player is been switched.",
        "If user dice get 1 on it's dice player automaticaly get switched and all temporary score get zero.",
        "Player you score 20 frist win the game.",
        "Players can restart the game by using restart button.",
      ],
      created: "4 Dec 2020",
      techUsed: "HTML, CSS, Javascript",
      role: "frontend ",
      link: "https://rakesh-choudhary175.github.io/DiceGame/",
    },
  ];

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
          {portfolioData.map((data, i) => (
            <Protfolio data={data} i={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;