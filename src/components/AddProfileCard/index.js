import { FaLinkedin } from "react-icons/fa6";
import "./index.css";

const AddProfile = (props) => {
  const { detail } = props;
  const { name, imgUrl, tag } = detail;
  return (
    <div className="profilecard">
      <img src={imgUrl} className="profileImage" alt="User" />
      <div className="profile-name-container">
        <h1 className="profile-name">{name}</h1>
        <p>{tag}</p>
      </div>
      <div>
        <button className="porfileButton">
          <FaLinkedin />
        </button>
      </div>
    </div>
  );
};

export default AddProfile;
