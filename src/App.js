/*import React, { useState } from 'react';
import './App.css';

function App() {
  const [points, setPoints] = useState(100);
  const pets = [
    { id: 1, name: 'Chippy', rarity: 'Rare', img: 'images/chippy.gif'},
    { id: 2, name: 'Spark', rarity: 'Epic', img: 'images/chippy.gif' },
    { id: 3, name: 'Shellie', rarity: 'Common', img: 'images/chipster.gif' },
  ];

  const handleButtonClick = (action) => {
    alert(`${action} feature coming soon!`);
  };

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
            <div key={pet.id} className={`pet-card ${pet.rarity.toLowerCase()}`}>
              <span className="pet-img"><img src={require(`./${pet.img}`)} style={{width: '100px', height: 'auto'}}/></span>
              <p className="pet-name">{pet.name}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="button-grid-container">
        <button onClick={() => handleButtonClick('Battle')}>Battle</button>
        <button onClick={() => handleButtonClick('Train')}>Train</button>
        <button onClick={() => handleButtonClick('Pull')}>Pull</button>
        <button onClick={() => handleButtonClick('Settings')}>Settings</button>
      </footer>
    </div>
  );
}

export default App;
*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import PetDetails from './PetDetails';
import Battle from './Battle';
import Train from './Train';
import Pull from './Pull';
import Settings from './Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/train" element={<Train />} />
        <Route path="/pull" element={<Pull />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
