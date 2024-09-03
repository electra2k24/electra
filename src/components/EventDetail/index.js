import { useParams } from "react-router";
import {Link} from 'react-router-dom'
import "./index.css";

const EventDetail = (props) => {
  const { id } = useParams();
  const { eventList } = props;
  const filterList = eventList.filter((eachItem) => eachItem.id === id);
  console.log(filterList[0]);
  const {registerform,eventImg, eventname, description} =
    filterList[0];
  return (
    <div className="eventDetail-bg-container">
      <div className="eventDetail">
        <div className="eventDetail-section1">
          <img src={eventImg} className="eventDetail-img" alt="Event Logo" />
          <h1 className="eventDetail-heading">{eventname}</h1>
        </div>
        <div className="eventDetail-description-container">
          <p className="eventDetail-description">{description}</p>
        </div>
        <div className="eventDetail-section2">
          <Link target="_blank" to={registerform}>
            <button className="eventDetail-registerButton">REGSITER HERE</button>
          </Link>
          <button className="eventDetail-RulesButton">RULES</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
