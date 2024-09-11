import AddContact from "../AddContactCard";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
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
      <div className="contactdetail-container">
        <p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.17498312358!2d80.05065757454642!3d12.96065231511927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1726059143599!5m2!1sen!2sin"
            className="map"
            Style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
        <div className="contactdetail-description">
          <div>
            <h1>Contact info</h1>
            <div>
              <FaInstagramSquare />
              <MdEmail />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
