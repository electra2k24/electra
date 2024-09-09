import AddProfile from "../AddProfileCard";
import "./index.css";

const Coordinator = (props) => {
  const { Contact } = props;
    return (
      <div className="coordinator-container">
        <div className="coordinator-content">
          <div className="profile-container">
            <h1>Key Persons</h1>
            <div className="profilecard-container">
              {Contact.keyPerson.map((eachItem) => (
                <AddProfile detail={eachItem} key={eachItem.id} />
              ))}
            </div>
          </div>

          <div className="profile-container">
            <h1>Staff Coordinators</h1>
            <div className="profilecard-container">
              {Contact.Master.map((eachItem) => (
                <AddProfile detail={eachItem} key={eachItem.id} />
              ))}
            </div>
          </div>
          <div className="profile-container">
            <h1>Student Coordinators</h1>
            <div className="profilecard-container">
              {Contact.students.map((eachItem) => (
                <AddProfile detail={eachItem} key={eachItem.id} />
              ))}
            </div>
          </div>
          <div className="profile-container">
            <h1>Web Development and Designing</h1>
            <div className="profilecard-container">
              {Contact.webMaster.map((eachItem) => (
                <AddProfile detail={eachItem} key={eachItem.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Coordinator;
