import AddContact from "../AddContactCard";
import "./index.css";

const Contact = (props) => {
  const { ContactList } = props;
  return (
    <div className="contactbg-container">
      <div className="profile-container">
        <h1>Office Bearers</h1>
        <div className="profilecard-container">
          {ContactList.officeMembers.map((eachItem) => (
            <AddContact detail={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Contact;
