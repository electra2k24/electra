import "./index.css";

const AddEventItem = props => {
  const { eventDetail } = props
  console.log(eventDetail)
  const {eventname,miniDescription} = eventDetail
  return (
    <div className="eventdescription-container">
      <div className="section">
        <div className="event-top-container">
          <h1>{eventname}</h1>
          <img src="" alt="user" />
        </div>
        <div className="event-buttom-container">
          <div className="eventinfo">
            <p>{miniDescription}</p>
            <p>10:30</p>
          </div>
          <div className="register-button-container">
            <button className="regsiter-button">REGSITER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventItem;
