import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const [points, setPoints] = useState(100);
  const navigate = useNavigate();  // Hook to navigate between pages

  const pets = [
    { id: 1, name: 'Jeff', rarity: 'Common', img: 'images/chippy.gif' },
    { id: 2, name: 'Jag', rarity: 'Mythic', img: 'images/fraser-jaguar.gif' },
    { id: 3, name: 'Remy', rarity: 'Common', img: 'images/chipster.gif' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="points">
          <h1>Points: {points}</h1>
        </div>
      </header>
      <main className="App-body">
        <h2>My Pets</h2>
        <div className="pets-container">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className={`pet-card ${pet.rarity.toLowerCase()}`}
              onClick={() => navigate(`/pet/${pet.id}`)}  // Navigate to the pet's detail page
              style={{ cursor: 'pointer' }}  // Add cursor pointer for better UX
            >
              <span className="pet-img">
                <img
                  src={require(`./${pet.img}`)}
                  alt={pet.name}
                  style={{ width: '100px', height: 'auto' }}
                />
              </span>
              <p className="pet-name">{pet.name}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="button-grid-container">
        <button onClick={() => navigate('/battle')}>Battle</button>
        <button onClick={() => navigate('/train')}>Train</button>
        <button onClick={() => navigate('/pull')}>Pull</button>
        <button onClick={() => navigate('/settings')}>Settings</button>
      </footer>
    </div>
  );
}

export default Home;
