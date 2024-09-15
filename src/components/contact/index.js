import AddContact from "../AddContactCard";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
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
          <h1>Contact</h1>
          <hr />
          <div className="followbutton-container">
            <h2 className="followbutton-heading">Follow us</h2>
            <div className="followbuttons">
              <FaInstagramSquare className="followButton" />
              <IoIosMail className="followButton" />
              <FaLinkedin className="followButton" />
            </div>
          </div>
          <div className="section-2">
            <h4>
              Website Created By: Muhamed Suhail S J{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/suhailx._06/ "
                className="contactfollow-button"
              >
                <button className="followbutton">
                  <FaInstagram />
                </button>
              </a>
            </h4>
            <h4>
              Website Designed By: Dhyanesh D
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/dhyaneshdurai01/"
                className="contactfollow-button"
              >
                <button className="followbutton">
                  <FaInstagram />
                </button>
              </a>
            </h4>
          </div>
          <div className="section-3">
            <p>Electra Team</p>
            <p>Department Of Electrical and Electronics</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
