import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [points, setPoints] = useState(100);
  const navigate = useNavigate(); // Hook to navigate between pages

  const pets = [
    { id: 1, name: "Jeff", rarity: "Common", img: "images/chippy.gif" },
    { id: 2, name: "Jag", rarity: "Mythic", img: "images/fraser-jaguar.gif" },
    { id: 3, name: "Pengu", rarity: "Rare", img: "images/penguin.gif" },
  ];

  return (
    <div className="Home">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <img
            className="back-button-img"
            src={require(`./images/left-arrow.PNG`)}
          />
        </button>
        <div className="middle">
          <h1>Home</h1>
        </div>
        <div className="points">
          <img className="points-img" src={require("./images/points.webp")} />
          <p className="points-text">{points}</p>
        </div>
      </header>
      <main className="Home-body">
        <div className="pets-container">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className={`pet-card ${pet.rarity.toLowerCase()}`}
              onClick={() => navigate(`/pet/${pet.id}`)} // Navigate to pet's detail page
              style={{ cursor: "pointer" }} // Add cursor pointer for better UI
            >
              <span className="pet-img">
                <img
                  src={require(`./${pet.img}`)}
                  alt={pet.name}
                  style={{ width: "200px", height: "auto" }}
                />
              </span>
              <p className="pet-name">{pet.name}</p>
            </div>
          ))}
        </div>
      </main>
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

export default Home;
