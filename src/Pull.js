import React, { useState } from 'react';
import './Pull.css';

function Pull() {
  const [points, setPoints] = useState(100);
  return (
  <div>
    <header className="Home-header">
      <div className="points">
        <h1>Points: {points}</h1>
      </div>
    </header>
    <main className="Pull">
      <div>
        <img src={require(`./images/claw-machine.png`)} className="claw-machine"></img>
      </div>
      <div>
        <button className="pull-button">Pull</button>
      </div>
    </main>
  </div>
  );
}

export default Pull;
