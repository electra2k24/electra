import "./index.css";
import { FaLinkedin } from "react-icons/fa6";


const AddContact = (props) => {
  const { detail } = props;
  const { name, imgUrl, tag, contactNumber, linkdinLink } = detail;
  return (
    <div className="contactCardBg-container">
      <div className="contact-section">
        <img src={imgUrl} className="contactImage" alt="User" />
        <div>
          <h1>{name}</h1>
          <p>{tag}</p>
          <p>{contactNumber}</p>
          <a target="_blank" rel="noreferrer" href={linkdinLink}>
            <button className="porfileButton">
              <FaLinkedin />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default AddContact;
