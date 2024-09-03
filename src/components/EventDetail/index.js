import { useParams } from "react-router";
import "./index.css";

const EventDetail = (props) => {
  const { id } = useParams();
  const { eventList } = props;
  const filterList = eventList.filter((eachItem) => eachItem.id === id);
  console.log(filterList[0]);
  const { eventImg, eventname, description} =
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
          <button className="eventDetail-registerButton">REGSITER HERE</button>
          <button className="eventDetail-RulesButton">RULES</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
