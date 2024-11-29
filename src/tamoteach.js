import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "./Learn.css";

function Learn() {
  const [points, setPoints] = useState(100);

  const navigate = useNavigate(); // Hook to navigate between pages
  return (
    <div className="Learn">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <img
            className="back-button-img"
            src={require(`./images/left-arrow.PNG`)}
          />
        </button>
        <div className="middle">
          {" "}
          <h1>Learn</h1>
        </div>
        <div className="points">
          <img className="points-img" src={require("./images/points.webp")} />
          <p className="points-text">{points}</p>
        </div>
      </header>
      <h2>Today I want to learn...</h2>

      <img
        src={require(`./images/Chemistry.PNG`)}
        alt="Chemistry"
        className="whiteBoard"
        onClick={() => navigate("/chem")}
      ></img>

      {/* RIGHT ARROW */}
      <img
        src={require(`./images/right-arrow.PNG`)}
        alt="Arrow"
        className="right_arrow"
      ></img>

      {/* LEFT ARROW */}
      <img
        src={require(`./images/right-arrow.PNG`)}
        alt="Arrow"
        className="left_arrow"
      ></img>

      <img
        src={require(`./images/Tophat .GIF`)}
        alt="Toppy"
        className="Toppy"
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

export default Learn;
