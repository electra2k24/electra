import { useParams } from "react-router";
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
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
            <button className="eventDetail-registerButton">
              REGISTER HERE
            </button>
          </Link>
          <Popup
            modal
            trigger={<button className="eventDetail-RulesButton">RULES</button>}
          >
            {(close) => (
              <div className="Rules-container">
                <h1>Rules</h1>
                <ul>
                  <li>Rule1</li>
                  <li>Rule1</li>
                  <li>Rule1</li>
                  <li>Rule1</li>
                  <li>Rule1</li>
                </ul>
                <button onClick={() => close()}>Close</button>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
