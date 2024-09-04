import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";
import EventDetail from "./components/EventDetail";
import Coordinator from "./components/Coordinator";

const eventList = [
  {
    id: "1",
    eventname: "Professor's Plan",
    type: "technical",
    miniDescription: "It is a paper presentation event",
    description: "Step into the spotlight at our dynamic Paper Presentation event, where innovation meets intellect. Present your groundbreaking research and bold ideas across diverse fields, captivating the judges with your insights, sharp analysis, and powerful delivery. This is your chance to showcase brilliance and stand out as the best—only the most compelling, cutting-edge papers will claim victory!t",
    rule: "alksdlkamd",
    registerform: "https://forms.gle/NuwqhZaWG95AFBdP9",
    eventlogo: "sdfkds",
    eventImg: "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
    eventcordintor: "Ashish Ragavendra",
  },
  {
    id: "2",
    eventname: "Unmask Innovators",
    type: "technical",
    miniDescription: "Create ideas on-the-spot from SDG problems with unexpected twists",
    description: "Get ready for on-the-spot idea creation, where you’ll tackle problem statements rooted in the Sustainable Development Goals (SDGs). Expect exciting twists during your PPT preparation that will test your creativity under pressure. Only the most innovative idea will rise to claim victory!t",
    rule: "alksdlkamd",
    registerform: "https://forms.gle/naXPGSaZKYPkxG9J9",
    eventlogo: "sdfkds",
    eventImg: "https://res.cloudinary.com/electra/image/upload/v1725469408/b0544a94777525.5e8728c2de1fc_oda_ypc1bt.png",
    eventcordintor: "Dhyanesh",
  },
  {
    id: "3",
    eventname: "Electro Heist",
    type: "technical",
    miniDescription: "It is a ciruit debugguing and designing based event",
    description: "Join us for an engaging and hands-on symposium on Circuit Designing and Debugging using Tinkercad, a powerful online tool for creating and simulating electronic circuits. This event is perfect for students, enthusiasts, and professionals eager to enhance their skills in circuit design and troubleshooting.",
    rule: "alksdlkamd",
    registerform: "https://forms.gle/4bSv313WGsja6mFd9",
    eventlogo: "sdfkds",
    eventImg: "https://res.cloudinary.com/electra/image/upload/v1725444879/wallpapersden.com_tokyo-money-heist-illustration_1920x1920_a3rbxw.jpg",
    eventcordintor: "Arul Murugan",
  },
  {
    id: "4",
    eventname: "Heist Unveiled",
    type: "technical",
    miniDescription: "Unveiling the game-changing prototype: Where vision meets reality!",
    description: "Join us for an exciting symposium where we showcase groundbreaking innovations and prototype models developed by creative minds. This event will feature project presentations that highlight the innovative solutions addressing real-world challenges. Participants will have the opportunity to present their prototype models, explain the technological advancements, and demonstrate how their innovations can make a significant impact across various fields.",
    rule: "alksdlkamd",
    registerform: "https://forms.gle/nL5HLkQbRy7dUCgS6",
    eventlogo: "sdfkds",
    eventImg: "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
    eventcordintor: "ragavendiran",
  },
  {
    id: "5",
    eventname: "Shutter Secrets",
    type: "nontechnical",
    miniDescription:
      "It is a photgraphy event, which need to come under SDG Goal",
    description: "It is a paper presentation event",
    rule: "alksdlkamd",
    registerform: "https://forms.gle/EmNSpM15tbqXApoX9",
    eventlogo: "sdfkds",
    eventImg: "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
    eventcordintor: "Ashish Ragavendra",
  },
  {
    id: "6",
    eventname: "Vault Breakout",
    type: "nontechnical",
    miniDescription: "This event features three escalating levels of challenges, where only the strongest contenders will endure.",
    description:
      "Embark on a thrilling adventure with your team of three in this unique escape room experience. Solve a series of puzzles and challenges inspired by the popular heist drama Money Heist. Each room is divided into three sections, each with its own unique theme and set of challenges. Work together to find hidden clues, crack codes, and overcome obstacles to progress to the next level. With limited time and increasing difficulty, this immersive experience will test your problem-solving skills, teamwork, and strategic thinking. Are you ready to accept the challenge and break out of the vault?",
    rule: "alksdlkamd",
    registerform: "https://forms.gle/ZqXN1bM85CYPNBGK9",
    eventlogo: "sdfkds",
    eventImg: "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
    eventcordintor: "Roshni T",
  },
  {
    id: "7",
    eventname: "Bidding Quiz",
    type: "nontechnical",
    miniDescription: "It is a paper presentation event",
    description: `A "Bidding Quiz" is a quiz game where players not only answer questions but also wager points based on their confidence in their answers. Before each question is revealed, participants decide how many points to bid. If they answer correctly, they gain those points; if they’re wrong, they lose them. This adds a strategic element, as players must weigh the risks and rewards with each bid. Special rounds might introduce twists, such as double points or no penalties for wrong answers, keeping the game exciting. The player or team with the highest score at the end wins. The Bidding Quiz is ideal for educational settings, corporate training, or competitive game nights, combining knowledge with strategic decision-making for a unique challenge`,
    rule: "alksdlkamd",
    registerform: "https://forms.gle/mS8KSmS8fyviPR586",
    eventlogo: "sdfkds",
    eventImg: "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
    eventcordintor: "Gokul",
  },
  {
    id: "8",
    eventname: "Surprising Event",
    type: "nontechnical",
    miniDescription: "It is a paper presentation event",
    description: "It is a paper presentation event",
    rule: "alksdlkamd",
    registerform: "On Spot",
    eventlogo: "sdfkds",
    eventImg: "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
    eventcordintor: "Ashish Ragavendra",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Event eventList={eventList} />} />
        <Route
          exact
          path="/coordinator"
          element={<Coordinator/>}
        />
        <Route
          exact
          path="/events/:id"
          element={<EventDetail eventList={eventList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
