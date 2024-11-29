import React from "react";
import "./Home.css";
import "./Learn.css";

function Chemistry() {
  return (
    <div className="Learn">
      <header className="LearnHeader">
        <h1>Chemistry</h1>
      </header>
      <h1>Unit 1</h1>

      <img
        src={require(`./images/Chemistry.PNG`)}
        alt="Chemistry"
        className="whiteboard"
      ></img>

      {/* RIGHT ARROW */}
      <img
        src={require(`./images/Arrow.PNG`)}
        alt="Arrow"
        className="right_arrow"
        id="right arrow"
      ></img>

      {/* LEFT ARROW */}
      <img
        src={require(`./images/Arrow.PNG`)}
        alt="Arrow"
        className="left_arrow"
        id="left arrow"
      ></img>

      <button
        onClick={() => window.history.back()}
        style={{ marginTop: "20px" }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Chemistry;
