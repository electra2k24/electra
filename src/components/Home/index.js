import { Component } from "react";
import { IoLocationSharp } from "react-icons/io5";
// import { FiArrowUpLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./index.css";

export default class Home extends Component {
  render() {
    return (
      <div class="bg-container">
        <div class="Header">
          <h1 className="title">ELECTRA</h1>
          <div className="info-container">
            <p>19/08/2024</p>
            <p>SYMPOSIUM</p>
            <p>
              <IoLocationSharp />
              CHENNAI
            </p>
          </div>
        </div>
        <div class="HomePage-container">
            <button className="left-button">
              {/* <FiArrowUpLeft /> */}
              Registration Closes Soon
            </button>
          <div class="HomePage-Button">
            <Link to="/about">
              <div>
                <button className="right-button">ABOUT</button>
              </div>
            </Link>
            <Link to="/event">
              <div>
                <button className="right-button">EVENT</button>
              </div>
            </Link>
            <Link to="/coordinator">
              <div>
                <button className="right-button">MASTERS</button>
              </div>
            </Link>
            <Link to="/contact">
              <div>
                <button className="right-button">CONTACT</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
