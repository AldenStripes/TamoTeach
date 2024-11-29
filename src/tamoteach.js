import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "./Learn.css";

function Learn() {
  const navigate = useNavigate(); // Hook to navigate between pages
  return (
    <div className="Learn">
      <header className="LearnHeader">
        <h1>Learn</h1>
      </header>
      <h2>Today I want to learn...</h2>

      <img
        src={require(`./images/Chemistry.PNG`)}
        alt="Chemistry"
        className="whiteboard"
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
        <button onClick={() => navigate("/learn")}>Review</button>
        <button onClick={() => navigate("/settings")}>Settings</button>
      </footer>
    </div>
  );
}

export default Learn;
