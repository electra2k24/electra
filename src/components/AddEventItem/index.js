import "./index.css";
import { Link } from "react-router-dom";

const AddEventItem = (props) => {
  const { eventDetail } = props;
  const { eventImg, id, eventname, miniDescription } = eventDetail;
  return (
    <div className="eventdexcripsd">
      <div className="eventdescription-container">
        <div className="section">
          <div className="event-top-container">
            <h1>{eventname}</h1>
            <img className="eventLogo" src={eventImg} alt="user" />
          </div>
          <div className="event-buttom-container">
            <div className="eventinfo">
              <p>{miniDescription}</p>
              <p></p>
            </div>
            <div className="register-button-container">
              <Link to={`/events/${id}`}>
                <button className="regsiter-button">REGISTER</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventItem;
