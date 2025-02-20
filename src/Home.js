import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem("points");
    return savedPoints ? JSON.parse(savedPoints) : 100; // default is 100
  });

  useEffect(() => {
    const savedPoints = localStorage.getItem("points");
    if (savedPoints !== null) {
      setPoints(JSON.parse(savedPoints));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  const navigate = useNavigate();

  const loadPetsFromLocalStorage = () => {
    const storedPets = JSON.parse(localStorage.getItem("selectedPets")) || [];
    const defaultPets = [
      { id: 1, name: "Jeff", rarity: "Common", img: "images/chippy.gif" },
      { id: 2, name: "Jag", rarity: "Mythic", img: "images/fraser-jaguar.gif" },
      { id: 3, name: "Pengu", rarity: "Common", img: "images/penguin.gif" },
    ];

    const mergedPets = [...defaultPets, ...storedPets].reduce((acc, pet) => {
      if (!acc.find((p) => p.id === pet.id)) {
        acc.push(pet);
      }
      return acc;
    }, []);

    return mergedPets;
  };

  const [selectedPets, setSelectedPets] = useState(loadPetsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("selectedPets", JSON.stringify(selectedPets));
  }, [selectedPets]);

  return (
    <div className="Home">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <img
            className="back-button-img"
            src={require(`./images/left-arrow.PNG`)}
            alt="Back"
          />
        </button>
        <div className="middle">
          <h1>Home</h1>
        </div>
        <div className="points">
          <img className="points-img" src={require("./images/points.webp")} alt="Points" />
          <p className="points-text">{points}</p>
        </div>
      </header>
      <main className="Home-body">
        <div className="pets-container">
          {JSON.parse(localStorage.getItem("selectedPets") || "[]").map((pet) => (
            <div
              key={pet.id}
              className={`pet-card ${pet.rarity.toLowerCase()}`}
              onClick={() => navigate(`/pet/${pet.id}`)} 
              style={{ cursor: "pointer" }}
            >
              <span className="pet-img">
                <img
                  src={require(`./${pet.img}`)}
                  alt={pet.name}
                  style={{ width: "130px", height: "auto" }}
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
