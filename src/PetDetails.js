import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./PetDetails.css";

function PetDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ate, setAte] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openAte = () => {
    setAte(true);
    setIsModalOpen(false);
  };
  const [points, setPoints] = useState(100);
  const { id } = useParams();
  const pets = [
    {
      id: 1,
      name: "Jeff",
      rarity: "Common",
      img: "images/chippy.gif",
      description: "Just a little guy with a love for adventure.",
    },
    {
      id: 2,
      name: "Jag",
      rarity: "Mythic",
      img: "images/fraser-jaguar.gif",
      description: "Jag claws and slashes his way through all.",
    },
    {
      id: 3,
      name: "Pengu",
      rarity: "Epic",
      img: "images/penguin.gif",
      description: "Pengu is a penguin.",
    },
  ];

  // Find the pet that matches the ID from the URL
  const pet = pets.find((pet) => pet.id.toString() === id);

  const handleTrainButton = () => {
    alert("Training feature coming soon!");
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
          <h1>Pets</h1>
        </div>
        <div className="points">
          <img className="points-img" src={require("./images/points.webp")} />
          <p className="points-text">{points}</p>
        </div>
      </header>
      <div className="pet-details">
        <div className="pet-details-container">
          <div className="pet-stats">
            <h2>{pet.name}</h2>
            <p>
              <strong>Rarity:</strong> {pet.rarity}
            </p>
            <p>
              <strong>Description:</strong> {pet.description}
            </p>
            <button onClick={handleTrainButton} style={{ marginRight: "50px" }}>
              Play!
            </button>
            <button onClick={openModal}>Feed!</button>
          </div>
          {!ate && (
            <div className="pet-img">
              <img
                src={require(`./${pet.img}`)}
                alt={pet.name}
                style={{ width: "450px", height: "auto" }}
              />
            </div>
          )}
          {ate && ( // Render only when isModalOpen is false
            <div className="pet-img">
              <img
                src={require(`./images/Yummy.GIF`)} // Dynamically require the image
                alt={pet.name}
                style={{ width: "500px", height: "auto" }}
              />
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img
              className="modal-img"
              src={require("./images/Inventory.PNG")}
              onClick={openAte}
            />
            <div></div>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PetDetails;
