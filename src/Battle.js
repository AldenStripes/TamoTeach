import React, { useState, useEffect } from "react";
import "./Battle.css";

function Battle() {
  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem('points');
    return savedPoints ? JSON.parse(savedPoints) : 100;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(require('./images/battle.GIF'));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const rightAnswer = (image) => {
    setImageSrc(image); // Change the image based on button clicked
  };

  useEffect(() => {
    localStorage.setItem('points', JSON.stringify(points));
  }, [points]);

  const decrease = (num) => {
    setPoints(prevPoints => Math.max(prevPoints - num, 0));
  }
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
        <img className="battle-img" src={imageSrc}/>
        <button className='attack-button' onClick={openModal}></button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img
              className="modal-img"
              src={require("./images/Question.PNG")}
            />
            <button
              className="overlay-button overlay-button-A"
              onClick={() => {
                closeModal(); rightAnswer(require('./images/battle-opp-hurt.GIF'))
              }}
            >
            </button>
            <button
              className="overlay-button overlay-button-B"
              onClick={closeModal}
            ></button>
            <button
              className="overlay-button overlay-button-C"
              onClick={closeModal}
            >
            </button>
            <button
              className="overlay-button overlay-button-D"
              onClick={closeModal}
            >
            </button>
            <div></div>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Battle;
