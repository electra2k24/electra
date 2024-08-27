import "./index.css";
import AddEventItem from "../AddEventItem";

const Event = (props) => {
  const { eventList } = props;
  console.log(eventList[0]);

  return (
    <div className="Event-container">
      <div className="eventlist-container">
        <h1 className="eventheader">
          Tech<span Style="color:white;">nic</span>al Ev
          <span Style="color:white;">e</span>nt
        </h1>
        <div className="event">
          <AddEventItem />
          <AddEventItem />
          <AddEventItem />
          <AddEventItem />
          <AddEventItem />
        </div>
      </div>
      <div className="eventlist-container">
        <h1 className="eventheader">
          Non-Tech<span Style="color:white;">nic</span>al Ev
          <span Style="color:white;">e</span>nt
        </h1>
        <div className="event">
          <AddEventItem />
          <AddEventItem />
          <AddEventItem />
          <AddEventItem />
          <AddEventItem />
        </div>
      </div>
    </div>
  );
};

export default Event;
