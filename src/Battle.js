import React, { useState, useEffect } from "react";
import "./Battle.css";
import i1 from "./images/newbattle.GIF";
import i2 from "./images/Dead.GIF";
import victory from "./images/Victory.PNG";

function Battle() {
  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem("points");
    return savedPoints ? JSON.parse(savedPoints) : 100;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [win, setWin] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const rightAnswer = () => {
    setWin(true);
    setIsModalOpen(false);
    setIndex(1);
  };
  const closeVictory = () => setWin(false);
  const images = [i1, i2];

  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  const decrease = (num) => {
    setPoints((prevPoints) => Math.max(prevPoints - num, 0));
  };

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
          <h1>Battle</h1>
        </div>
        <div className="points">
          <img className="points-img" src={require("./images/points.webp")} />
          <p className="points-text">{points}</p>
        </div>
      </header>

      <div className="battle-background-container">
        <img className="battle-img" src={images[index]} />
        <button className="attack-button" onClick={openModal}></button>
      </div>

      {win && (
        <div className="modal">
          <div className="modal-content">
            <img className="modal-img" src={require("./images/Victory.PNG")} />
            <button onClick={closeVictory}>Close</button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img className="modal-img" src={require("./images/Question.PNG")} />
            <button
              className="overlay-button overlay-button-A"
              onClick={() => {
                closeModal();
                rightAnswer(require("./images/battle-opp-hurt.GIF"));
              }}
            ></button>
            <button
              className="overlay-button overlay-button-B"
              onClick={closeModal}
            ></button>
            <button
              className="overlay-button overlay-button-C"
              onClick={closeModal}
            ></button>
            <button
              className="overlay-button overlay-button-D"
              onClick={closeModal}
            ></button>
            <div></div>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Battle;
