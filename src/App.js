import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";
import Contact from "./components/contact";
import EventDetail from "./components/EventDetail";
import Coordinator from "./components/Coordinator";

const eventList = [
  {
    id: "1",
    eventname: "Professor's Plan",
    type: "technical",
    contactNumber: "8667569656",
    eventStudentCoordinator: "Ashish Ragavendra",
    eventStaffCoordinator: "Dr.Jagadeesh Kumar",
    miniDescription: "It is a paper presentation event",
    description:
      "Step into the spotlight at our dynamic Paper Presentation event, where innovation meets intellect. Present your groundbreaking research and bold ideas across diverse fields, captivating the judges with your insights, sharp analysis, and powerful delivery. This is your chance to showcase brilliance and stand out as the best—only the most compelling, cutting-edge papers will claim victory!",
    rule: [
      "Team Size: 3-4(Per Team)",
      "PPT Slide Should Be In Min 5-15 Slides",
      "Take Necessary Items For The Presentation (Laptops,Chargers,Posters,Charts,Etc,.)",
      "Presentation Timing 7mins (Per Team) ",
      "Ideas Must Be Related To Sdg (17 Goals)",
      "All Should Attach Your Idea Ppt In The Given Google Form Itself",
    ],
    registerform: "https://forms.gle/NuwqhZaWG95AFBdP9",
    eventlogo: "sdfkds",
    eventImg:
      "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
  },
  {
    id: "2",
    eventname: "Unmask Innovators",
    type: "technical",
    eventStudentCoordinator: "Dhyanesh",
    contactNumber: "9940450563",
    eventStaffCoordinator: "Dr.S.Sivarajeswari",
    miniDescription:
      "Create ideas on-the-spot from SDG problems with unexpected twists",
    description:
      "Get ready for on-the-spot idea creation, where you’ll tackle problem statements rooted in the Sustainable Development Goals (SDGs). Expect exciting twists during your PPT preparation that will test your creativity under pressure. Only the most innovative idea will rise to claim victory!,SDG Goal Selection: Choose one of the 17 SDG goals,Problem Statement Assignment: A specific problem related to your chosen SDG will be provided.Idea Presentation: Brainstorm and present your solution. ",
    rule: [
      "2-4 members per team. Individual participation allowed.",
      "No pre-prepared materials, Use only provided resources.",
      "Work independently. No plagiarism.",
      "SDG Goal Selection: Choose one of the 17 SDG goals.",
      "Problem Statement Assignment: A specific problem related to your chosen SDG will be provided.",
      "Idea Presentation: Brainstorm and present your solution.",
    ],
    registerform: "https://forms.gle/naXPGSaZKYPkxG9J9",
    eventlogo: "sdfkds",
    eventImg:
      "https://res.cloudinary.com/electra/image/upload/v1725469408/b0544a94777525.5e8728c2de1fc_oda_ypc1bt.png",
  },
  {
    id: "3",
    eventname: "Electro Heist",
    type: "technical",
    eventStudentCoordinator: "Arulmurugan",
    contactNumber: "7904289344",
    eventStaffCoordinator: "Ms.N.Shanthi",
    miniDescription: "It is a ciruit debugguing and designing based event",
    description:
      "Join us for an engaging and hands-on symposium on Circuit Designing and Debugging using Tinkercad, a powerful online tool for creating and simulating electronic circuits. This event is perfect for students, enthusiasts, and professionals eager to enhance their skills in circuit design and troubleshooting.",
    rule: [
      "TEAM SIZE : 3-4(per team)",
      "Round 1: Participants will be given a simple circuit with an error, which they must debug and correct.",
      "Teams shortlisted from Round 1 will advance to Round 2, where they must design a circuit based on a given problem statement.",
      "The team with the best-designed circuit will be awarded.",
      "Predefined circuits are not allowed.",
      "The use of online resources is strictly prohibited.",
      "Tinker account shouldbe created(FREE!!!)",
    ],
    registerform: "https://forms.gle/4bSv313WGsja6mFd9",
    eventlogo: "sdfkds",
    eventImg:
      "https://res.cloudinary.com/electra/image/upload/v1725444879/wallpapersden.com_tokyo-money-heist-illustration_1920x1920_a3rbxw.jpg",
  },
  {
    id: "4",
    eventname: "Heist Unveiled",
    type: "technical",
    eventStudentCoordinator: "Ragavendiran",
    contactNumber: "9786668578",
    eventStaffCoordinator: "Dr.T.Muthamizhan",
    miniDescription:
      "Unveiling the game-changing prototype: Where vision meets reality!",
    description:
      "Join us for an exciting symposium where we showcase groundbreaking innovations and prototype models developed by creative minds. This event will feature project presentations that highlight the innovative solutions addressing real-world challenges. Participants will have the opportunity to present their prototype models, explain the technological advancements, and demonstrate how their innovations can make a significant impact across various fields.",
    rule: [
      "No. of Participant 3-4",
      "Prototype must be completed above 50%",
      "Projects must be Innovative,social impact, unique and non existing projects.",
      "Participants bring their own laptop for presentation",
      "Teams with girl member will receive extra points",
      "Project should include SDG",
    ],
    registerform: "https://forms.gle/nL5HLkQbRy7dUCgS6",
    eventlogo: "sdfkds",
    eventImg:
      "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
  },
  {
    id: "5",
    eventname: "Shutter Secrets",
    type: "nontechnical",
    eventStudentCoordinator: "Rishikeshwaran",
    contactNumber: "8870790122",
    eventStaffCoordinator: "Mr.Rathnavel",
    miniDescription:
      "It is a photgraphy event, which need to come under SDG Goal",
    description: "It is a paper presentation event",
    rule: ["hi", "asdmkasmdasd", "asmdksma"],
    registerform: "https://forms.gle/EmNSpM15tbqXApoX9",
    eventlogo: "sdfkds",
    eventImg:
      "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
  },
  {
    id: "6",
    eventname: "Vault Breakout",
    type: "nontechnical",
    eventStudentCoordinator: "Roshni Thiruvengadam",
    contactNumber: "6382364001",
    eventStaffCoordinator: "Ms.G.Ezhilarasi",
    miniDescription:
      "This event features three escalating levels of challenges, where only the strongest contenders will endure.",
    description:
      "Embark on a thrilling adventure with your team of three in this unique escape room experience. Solve a series of puzzles and challenges inspired by the popular heist drama Money Heist. Each room is divided into three sections, each with its own unique theme and set of challenges. Work together to find hidden clues, crack codes, and overcome obstacles to progress to the next level. With limited time and increasing difficulty, this immersive experience will test your problem-solving skills, teamwork, and strategic thinking. Are you ready to accept the challenge and break out of the vault?",
    rule: [
      "Teams: 2-4 members.",
      "Levels: 3 levels—Small, Medium, Hard.",
      "Mini-Games: 3 per level.",
      "Points: Earn by completing mini-games.",
      "Time: Finish within the time limit.",
      "Progress: Complete all to advance.",
      "Winning: Most points win; fastest team breaks ties.",
      "Fair Play: Cheating = disqualification.",
      "9. End: Game ends after final level, winners based on points and time.",
    ],
    registerform: "https://forms.gle/ZqXN1bM85CYPNBGK9",
    eventlogo: "sdfkds",
    eventImg:
      "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
  },
  {
    id: "7",
    eventname: "Bidding Quiz",
    type: "nontechnical",
    eventStudentCoordinator: "Gokul G",
    eventStaffCoordinator: "Dr.E.Maheswari",
    contactNumber: "7550171768",
    miniDescription: "It is a paper presentation event",
    description: `A "Bidding Quiz" is a quiz game where players not only answer questions but also wager points based on their confidence in their answers. Before each question is revealed, participants decide how many points to bid. If they answer correctly, they gain those points; if they’re wrong, they lose them. This adds a strategic element, as players must weigh the risks and rewards with each bid. Special rounds might introduce twists, such as double points or no penalties for wrong answers, keeping the game exciting. The player or team with the highest score at the end wins. The Bidding Quiz is ideal for educational settings, corporate training, or competitive game nights, combining knowledge with strategic decision-making for a unique challenge`,
    rule: ["hi", "asdmkasmdasd", "asmdksma"],
    registerform: "https://forms.gle/mS8KSmS8fyviPR586",
    eventlogo: "sdfkds",
    eventImg:
      "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
  },
  {
    id: "8",
    eventname: "Surprising Event",
    type: "nontechnical",
    eventStudentCoordinator: "",
    contactNumber: "",
    eventStaffCoordinator: "",
    miniDescription: "ON SPOT !!!!",
    description: "ON SPOT REGISTRATION",
    rule: ["On Spot!!!!"],
    registerform: "On Spot",
    eventlogo: "sdfkds",
    eventImg:
      "https://res.cloudinary.com/electra/image/upload/berlin_gsmz0m.jpg",
    eventcordintor: "",
  },
];

const ContactList = {
  keyPerson: [
    {
      id: 0,
      name: "Shri.Sai Prakash Leo Muthu",
      tag: "CEO",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/sairam_ceo.0a9b6b511fc2cf277097_ccpzxa.png",
      linkdinLink: "https://linkedin.com/in/sairamceo",
    },
    {
      id: 1,
      name: "Dr.K.Palanikumar",
      tag: "Principal",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/v1725871343/sit-principal_qy2rvs.webp",
      linkdinLink: "https://linkedin.com/in/dr-palanikumar-k-5ba50827",
    },
    {
      id: 2,
      name: "Dr.G.Prakash",
      tag: "HOD",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/v1725871686/1820842_jxikrt.jpg",
      linkdinLink: "https://linkedin.com/in/dr-prakash-ganesan-7882671aa",
    },
  ],
  Master: [
    {
      id: 0,
      name: "Ms.A.Sasikala",
      tag: "Coordinator",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/citations_iax237.jpg",
      linkdinLink: "https://linkedin.com/in/sasikala-arumugham-8b1031a2",
    },
    {
      id: 1,
      name: "Mr.A.Anbazhagan",
      tag: "Coordinator",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/204668_mx8wt8.jpg",
      linkdinLink: "https://linkedin.com/in/anbazhagan-a-b54307a7",
    },
  ],
  students: [
    {
      id: 0,
      name: "Ashish Ragavendra N U",
      tag: " ",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_720,h_720/v1726049317/file_c96oy5_1_tqzi9u.jpg",
      linkdinLink:
        "https://www.linkedin.com/in/ashish-ragavendra-n-u-31a90321b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app+",
    },
    {
      id: 1,
      name: "Dhyanesh D",
      tag: "",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_1500,h_1500,ar_1:1,g_auto/v1725984679/1725978003058_pfcvab.jpg",
      linkdinLink: "https://linkedin.com/in/dhyaneshd",
    },
    {
      id: 2,
      name: "Arulmurugan N R",
      tag: "",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_2500,h_2500,ar_1:1,g_auto/v1725985480/IMG-20240910-WA0063_qz5wlr.jpg",
      linkdinLink:
        "https://www.linkedin.com/in/arulmurugan-n-r-b24339259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 3,
      name: "Ragavendiran P",
      tag: "",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_fill,w_300,h_300,g_auto/v1725967408/IMG-20240910-WA0027_blddz0.jpg",
      linkdinLink: "https://linkedin.com/in/ragavendiran-p-89b632257",
    },
    {
      id: 4,
      name: "Gokul G",
      tag: "",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_400,h_400,g_auto/v1725956627/1_vjbibh.jpg",
      linkdinLink:
        "https://www.linkedin.com/in/gokul-gopi-833a51258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 5,
      name: "Roshni Thiruvengadam",
      tag: "",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_fill,w_600,h_600,e_improve/v1725978639/eabc547c-5cdc-4eef-997f-5f6e47674d7a.png",
      linkdinLink: "https://linkedin.com/in/roshni-thiruvengadam-103853257",
    },
    {
      id: 6,
      name: "Rishikeshwaran B R",
      tag: "",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_2000,h_2000,g_auto/v1725967348/IMG-20240910-WA0037_ftjrdw.jpg",
      linkdinLink: "",
    },
  ],
  webMaster: [
    {
      id: 0,
      name: "Muhamed Suhail S J",
      tag: " ",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_300,h_300/v1725892666/unnamed_rew2k4.jpg",
      linkdinLink: "https://linkedin.com/in/muhamedsuhailsj",
    },
    {
      id: 1,
      name: "Dhyanesh D",
      tag: " ",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_1500,h_1500,ar_1:1,g_auto/v1725984679/1725978003058_pfcvab.jpg",
      linkdinLink: "https://linkedin.com/in/dhyaneshd",
    },
    {
      id: 2,
      name: "Somesh D",
      tag: "",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/1714661230209_gnr2xg.jpg",
      linkdinLink: "https://linkedin.com/in/someshdharmalingam",
    },
  ],
  officeMembers: [
    {
      id: 0,
      name: "Diwakar V N",
      contactNumber: "9841881470",
      tag: "President",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_300,h_300,g_auto/v1726034651/IMG-20240910-WA0033_lwo6uf.jpg",
      linkdinLink: "",
    },
    {
      id: 1,
      name: "Shanmathi M",
      contactNumber: "9994675175",
      tag: "Vice-President",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_700,h_700,g_auto/v1725976812/209faedc-14aa-426a-b0d3-f66182eb7cff.png",
      linkdinLink: "https://linkedin.com/in/shanmathi-m-ab8935257",
    },
    {
      id: 2,
      name: "Avinash A",
      contactNumber: "6380287507",
      tag: "Secretary",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_2060,h_2060,g_auto/v1726035390/Picsart_24-08-11_23-27-40-435_mjc8l8.jpg",
      linkdinLink: "",
    },
    {
      id: 3,
      name: "Vignesh L",
      contactNumber: "6381273013",
      tag: "Treasurer",
      imgUrl:
        "https://res.cloudinary.com/electra/image/upload/c_crop,w_450,h_450,g_auto/v1725963271/1_uzkjsd.jpg",
      linkdinLink: "",
    },
  ],
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/contact"
          element={<Contact ContactList={ContactList} />}
        />
        <Route exact path="/event" element={<Event eventList={eventList} />} />
        <Route
          exact
          path="/coordinator"
          element={<Coordinator ContactList={ContactList} />}
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
