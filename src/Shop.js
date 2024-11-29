import React, { useState } from "react";
import "./Shop.css";

function Shop() {
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
          <h1>Shop</h1>
        </div>
        <div className="points">
          <img className="points-img" src={require("./images/points.webp")} />
          <p className="points-text">{points}</p>
        </div>
      </header>
      <div className="background-container">
        <img className="shop-img" src={require("./images/Shop.PNG")} />
        <button className="cake-button" onClick={openModal}></button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img
              className="modal-img"
              src={require("./images/cake-popup.PNG")}
            />
            <div></div>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
