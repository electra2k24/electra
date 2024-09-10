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
  const {
    registerform,
    eventImg,
    eventname,
    description,
    eventStudentCoordinator,
    eventStaffCoordinator,
    rule,
    contactNumber,
  } = filterList[0];

  return (
    <div className="eventDetail-bg-container">
      <div className="eventDetail">
        <div className="eventDetail-section1">
          <img src={eventImg} className="eventDetail-img" alt="Event Logo" />
          <div>
            <h1 className="eventDetail-heading">{eventname}</h1>
            <p className="eventDetail-info">
              Event Staff Coordinator : {eventStaffCoordinator}
            </p>
            <p className="eventDetail-info">
              Event Student Coordinator : {eventStudentCoordinator}
            </p>
            <p className="eventDetail-info">Contact Detail : {contactNumber}</p>
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
          <Popup
            modal
            trigger={
              <button className="eventDetail-RulesButton"> RULES</button>
            }
            className="popup-content"
          >
            <div className="rules-container">
              <div>
                <h1 className="RulesHeading">Rules and Regulations</h1>
              </div>
              <ul className="rules-List">
                {rule.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
