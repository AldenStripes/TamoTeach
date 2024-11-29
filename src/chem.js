import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "./Chem.css";
import w1 from "./images/Unit 1.PNG";
import w2 from "./images/Unit 2.PNG";
import w3 from "./images/Unit 3.PNG";
import w4 from "./images/Definition 1.PNG";
import w5 from "./images/Definition 2.PNG";
import w6 from "./images/Definition 3.PNG";

function Chemistry() {
  const [points, setPoints] = useState(100);
  const whiteboards = [w1, w2, w3, w4, w5, w6];
  const units = ["Unit 1", "Unit 2", "Unit 3"];
  const [currentUnit, setCurrentUnit] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Hook to navigate between pages

  const cycle_up = () => {
    setCurrentUnit((prevUnit) => (prevUnit + 1) % 3);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  function cycle_down() {
    setCurrentUnit((prevUnit) => (prevUnit - 1) % 3);
    setCurrentIndex((prevIndex) => (prevIndex - 1) % 3);
  }

  function flip() {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % 6);
  }

  return (
    <div className="Chem">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <img
            className="back-button-img"
            src={require(`./images/left-arrow.PNG`)}
          />
        </button>
        <div className="middle">
          <h1>Chemistry</h1>
        </div>
        <div className="points">
          <img className="points-img" src={require("./images/points.webp")} />
          <p className="points-text">{points}</p>
        </div>
      </header>
      <h3>{units[currentUnit]}</h3>

      <img
        src={whiteboards[currentIndex]}
        alt="Chemistry"
        className="whiteboard"
        id="whiteboard"
        onClick={flip}
      ></img>

      {/* RIGHT ARROW */}
      <img
        src={require(`./images/right-arrow.PNG`)}
        alt="Arrow"
        className="right_arrow1"
        id="right arrow"
      ></img>

      <img
        src={require(`./images/right-arrow.PNG`)}
        alt="Arrow"
        className="right_arrow2"
        id="right arrow2"
        onClick={cycle_up}
      ></img>

      {/* LEFT ARROW */}
      <img
        src={require(`./images/left-arrow.PNG`)}
        alt="Arrow"
        className="left_arrow1"
        id="left arrow"
      ></img>

      <img
        src={require(`./images/left-arrow.PNG`)}
        alt="Arrow"
        className="left_arrow2"
        id="left arrow2"
        onClick={cycle_down}
      ></img>

      <footer className="button-grid-container">
        <button onClick={() => navigate("/battle")}>Battle</button>
        <button onClick={() => navigate("/pull")}>Pull</button>
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/learn")}>Learn</button>
        <button onClick={() => navigate("/shop")}>Shop</button>
      </footer>
    </div>
  );
}

export default Chemistry;
