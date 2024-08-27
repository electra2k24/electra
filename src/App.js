import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";


const eventList = [
  {
    id:'1',
    eventname: 'professor plan',
    description: 'kasdkfowdemfk',
    rule: 'alksdlkamd',
    registerform: 'ksdklfdsklfm',
    eventimg: 'sdfkds',
    eventcordintor:'sdfkmsdkmf'
  }
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
