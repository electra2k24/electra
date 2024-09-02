import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";
import EventDetail from "./components/EventDetail";

const eventList = {
  technical: [
    {
      id: "1",
      eventname: "Professor Plan",
      miniDescription: "It is a paper presentation event",
      description: "It is a paper presentation event",
      rule: "alksdlkamd",
      registerform: "ksdklfdsklfm",
      eventlogo: "sdfkds",
      eventImg: "",
      eventcordintor: "Ashish Ragavendra",
    },
    {
      id: "2",
      eventname: "Unmask Innovators",
      miniDescription: "It is SDG based on-time idea presentation",
      description: "It is a paper presentation event",
      rule: "alksdlkamd",
      registerform: "ksdklfdsklfm",
      eventlogo: "sdfkds",
      eventImg: "",
      eventcordintor: "Ashish Ragavendra",
    },
    {
      id: "3",
      eventname: "Electro Heist",
      miniDescription: "It is a ciruit debugguing and designing based event",
      description: "It is a paper presentation event",
      rule: "alksdlkamd",
      registerform: "ksdklfdsklfm",
      eventlogo: "sdfkds",
      eventImg: "",
      eventcordintor: "Ashish Ragavendra",
    },
    {
      id: "4",
      eventname: "Heist Unveiled",
      miniDescription: "It is a paper presentation event",
      description: "It is a paper presentation event",
      rule: "alksdlkamd",
      registerform: "ksdklfdsklfm",
      eventlogo: "sdfkds",
      eventImg: "",
      eventcordintor: "Ashish Ragavendra",
    },
  ],
  nontechnical: [
    {
      id: "5",
      eventname: "Shutter Secrets",
      miniDescription:
        "It is a photgraphy event, which need to come under SDG Goal",
      description: "It is a paper presentation event",
      rule: "alksdlkamd",
      registerform: "ksdklfdsklfm",
      eventlogo: "sdfkds",
      eventImg: "",
      eventcordintor: "Ashish Ragavendra",
    },
    {
      id: "6",
      eventname: "Valut Breakout",
      miniDescription: "It is a paper presentation event",
      description:
        "Embark on a thrilling adventure with your team of three in this unique escape room experience. Solve a series of puzzles and challenges inspired by the popular heist drama Money Heist. Each room is divided into three sections, each with its own unique theme and set of challenges. Work together to find hidden clues, crack codes, and overcome obstacles to progress to the next level. With limited time and increasing difficulty, this immersive experience will test your problem-solving skills, teamwork, and strategic thinking. Are you ready to accept the challenge and break out of the vault?",
      rule: "alksdlkamd",
      registerform: "ksdklfdsklfm",
      eventlogo: "sdfkds",
      eventImg: "",
      eventcordintor: "Roshni T",
    },
    {
      id: "7",
      eventname: "Bidding Quiz",
      miniDescription: "It is a paper presentation event",
      description: `A "Bidding Quiz" is a quiz game where players not only answer questions but also wager points based on their confidence in their answers. Before each question is revealed, participants decide how many points to bid. If they answer correctly, they gain those points; if they’re wrong, they lose them. This adds a strategic element, as players must weigh the risks and rewards with each bid. Special rounds might introduce twists, such as double points or no penalties for wrong answers, keeping the game exciting. The player or team with the highest score at the end wins. The Bidding Quiz is ideal for educational settings, corporate training, or competitive game nights, combining knowledge with strategic decision-making for a unique challenge`,
      rule: "alksdlkamd",
      registerform: "ksdklfdsklfm",
      eventlogo: "sdfkds",
      eventImg: "",
      eventcordintor: "Ashish Ragavendra",
    },
    {
      id: "8",
      eventname: "Surprising Event",
      miniDescription: "It is a paper presentation event",
      description: "It is a paper presentation event",
      rule: "alksdlkamd",
      registerform: "ksdklfdsklfm",
      eventlogo: "sdfkds",
      eventImg: "",
      eventcordintor: "Ashish Ragavendra",
    },
  ],
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Event eventList={eventList} />} />
        <Route exact path="/events/:id" element={<EventDetail eventList={eventList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
