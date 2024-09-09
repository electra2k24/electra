import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./index.css";

const EventDetail = (props) => {
  const { id } = useParams();
  const { eventList } = props;
  const filterList = eventList.filter((eachItem) => eachItem.id === id);
  console.log(filterList[0]);
  const { registerform, eventImg, eventname, description } = filterList[0];
  return (
    <div className="eventDetail-bg-container">
      <div className="eventDetail">
        <div className="eventDetail-section1">
          <img src={eventImg} className="eventDetail-img" alt="Event Logo" />
          <div>
            <h1 className="eventDetail-heading">{eventname}</h1>
            <p className="eventDetail-info">Event Student Coordinator : </p>
            <p className="eventDetail-info">Event Staff Coordinator : </p>
            <p className="eventDetail-info">Contact Detail : </p>
          </div>
        </div>
        <div className="eventDetail-description-container">
          <p className="eventDetail-description">{description}</p>
        </div>
        <div className="eventDetail-section2">
          <Link target="_blank" to={registerform}>
            <button className="eventDetail-registerButton">
              REGISTER HERE
            </button>
          </Link>
          <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
