import "./index.css";
import AddEventItem from "../AddEventItem";


const Event = (props) => {
  const { eventList } = props;
  const technicalList = eventList.filter(eachItem => eachItem.type === 'technical')
  const nontechnicalList = eventList.filter(eachItem => eachItem.type === 'nontechnical')
  return (
    <div className="Event-container">
      <div className="eventlist-container">
        <h1 className="eventheader">
          Tech<span Style="color:white;">nic</span>al Ev
          <span Style="color:white;">e</span>nt
        </h1>
        <div className="event">
          {technicalList.map((eachitem) => (
            <AddEventItem eventDetail={eachitem} key={eachitem.id} />
          ))}
        </div>
      </div>
      <div className="eventlist-container">
        <h1 className="eventheader">
          Non-Tech<span Style="color:white;">nic</span>al Ev
          <span Style="color:white;">e</span>nt
        </h1>
        <div className="event">
          {nontechnicalList.map((eachitem) => (
            <AddEventItem eventDetail={eachitem} key={eachitem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
