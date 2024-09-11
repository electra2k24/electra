import { Component } from "react";
import { IoLocationSharp } from "react-icons/io5";
// import { FiArrowUpLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { intervalToDuration } from "date-fns";
import "./index.css";

export default class Home extends Component {
  state = { date: {} };
  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    const result = () => {
      const r = intervalToDuration({
        start: new Date(),
        end: new Date(2024, 8, 19, 8, 59, 59),
      });
      this.setState({ date: r });
      console.log("r");
    };

    setInterval(result, 1000);
  };

  render() {
    const { date } = this.state;
    return (
      <div className="bg-container">
        <div className="Header">
          <h1 className="title">
            ELECTRA<span className="title-span"> 2K24 ‌</span>
          </h1>
          <div className="info-container">
            <p>19|09|2024</p>
            <p>SYMPOSIUM</p>
            <p>
              <IoLocationSharp />
              CHENNAI
            </p>
          </div>
        </div>
        <div className="HomePage-container">
          <button className="left-button">
            {/* <FiArrowUpLeft /> */}
            Registration Closes on 17/09
          </button>
          <div className="time-container">
            <p>{`Days : ${date.days === undefined ? 0 : date.days} | Hours : ${
              date.hours === undefined ? 0 : date.hours
            } | Minutes : ${
              date.minutes === undefined ? 0 : date.minutes
            } | Seconds : ${date.seconds === undefined ? 0 : date.seconds}`}</p>
          </div>
          <div className="HomePage-Button">
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
