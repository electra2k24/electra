import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";


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
      eventname: "Professor Plan",
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
  ],
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Event eventList={eventList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
