import "./index.css";

const AddContact = (props) => {
  const { detail } = props;
  const { name, imgUrl, tag } = detail;
  return (
    <div className="contactCardBg-container">
      <div className="contact-section">
        <img src={imgUrl} className="contactImage" alt="User" />
        <div>
          <h1>{name}</h1>
          <p>{tag}</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};
export default AddContact;
