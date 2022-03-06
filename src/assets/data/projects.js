import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/lecture_planner.png";
import CovidTrackerImg from "../images/covid-19.PNG";
import WebShopImg from "../images/e-shop.jpg";
import BoatTourImg from "../images/boat-tour.jpg";
import FotoScoutImg from "../images/FotoScout.PNG";
import TodoImg from "../images/todo-app.PNG";

const projects = [{
        id: uuidv4(),
        name: "Todo Status",
        desc: "Managing daily activities in a systematic way",
        img: TodoImg,
        path: "https://github.com/karkixitiz/todo-app",
    },
    {
        id: uuidv4(),
        name: "Covid-19 Tracker",
        desc: "An application to track number of people affected from Covid-19. This is responsive web application design in react.",
        img: CovidTrackerImg,
        path: "https://github.com/karkixitiz/covid-19-tracker",
    },
    {
        id: uuidv4(),
        name: "Web Shop",
        desc: "A web shop design in PHP, implemented web security practices into consideration.",
        img: WebShopImg,
        path: "https://github.com/karkixitiz/Secure-WebShop",
    },
    {
        id: uuidv4(),
        name: "Boat Tour Manager",
        desc: "It represents a boat company, offering group trips and boat rentals. Design in .Net Framework.",
        img: BoatTourImg,
        path: "https://github.com/karkixitiz/Boat-Tours-Manager",
    },
    {
        id: uuidv4(),
        name: "Photo Tracker",
        desc: "Web application design for photographer to explore photography location. The portfolio is made using Vue.js,Express.js and MongoDb",
        img: FotoScoutImg,
        path: "https://github.com/karkixitiz/Photo-Tracker",
    },
    {
        id: uuidv4(),
        name: "Lecture Planner",
        desc: "An application to allow university students in Kiel to find out possible ways for them to reach their university from current/desired location.",
        img: ProjectImg,
        path: "https://github.com/karkixitiz/Lecture-Planner",
    },
];

export default projects;