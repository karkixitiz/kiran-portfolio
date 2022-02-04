import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/projectImg.png";
import CovidTrackerImg from "../images/covid-19.PNG";
import WebShopImg from "../images/e-shop.jpg";
import BoatTourImg from "../images/boat-tour.jpg";
import FotoScoutImg from "../images/FotoScout.PNG";

const projects = [
  {
    id: uuidv4(),
    name: "Covid-19 Tracker",
    desc: "An application to track number of people affected from Covid-19. This is responsive web application design in react.",
    img: CovidTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Web Shop",
    desc: "A web shop design in PHP, implemented web security practices into consideration.",
    img: WebShopImg,
  },
  {
    id: uuidv4(),
    name: "Boat Tour Manager",
    desc: "It represents a boat company, offering group trips and boat rentals. Design in .Net Framework.",
    img: BoatTourImg,
  },
  {
    id: uuidv4(),
    name: "Foto Scout",
    desc: "Web application design for photographer to explore photography location. The portfolio is made using Vue.js,Express.js and MongoDb",
    img: FotoScoutImg,
  },
  {
    id: uuidv4(),
    name: "Tracking Soft",
    desc: "A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",
    img: ProjectImg,
  },
];

export default projects;
