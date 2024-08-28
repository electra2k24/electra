import { Component } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FiArrowUpLeft } from "react-icons/fi";
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
          <Link to="/register">
            <button className="left-button">
              <FiArrowUpLeft />
              Register Now
            </button>
          </Link>
          <div class="HomePage-Button">
            <Link to="/">
              <button className="right-button">HOME</button>
            </Link>
            <Link to="/event">
              <button className="right-button">EVENT</button>
            </Link>
            <Link to="/about">
              <button className="right-button">ABOUT</button>
            </Link>
            <Link to="/contact">
              <button className="right-button">CONTACT</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
