import React from "react";
import "./Home.css";
import "./Chem.css";

function Chemistry() {
  return (
    <div className="Chem">
      <header className="ChemHeader">
        <h1>Chemistry</h1>
      </header>
      <h3>Unit 1</h3>

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
    </div>
  );
}

export default Chemistry;
