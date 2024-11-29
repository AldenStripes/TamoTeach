import React, { useState } from "react";
import "./Battle.css";

function Battle() {
  const [points, setPoints] = useState(100);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
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
      <div className="battle-background-container">
        <img className="battle-img" src={require("./images/battle.PNG")} />
        <button className="attack-button" onClick={openModal}></button>
        <button className="defense-button" onClick={openModal}></button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img
              className="modal-img"
              src={require("./images/pulled-pengu.PNG")}
            />
            <div></div>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Battle;
