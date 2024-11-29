import React, { useState } from 'react';
import './Pull.css';

function Pull() {
  const [points, setPoints] = useState(100);
  return (
  <div>
    <header className="header">
      <button className='back-button' onClick={() => window.history.back()}>
        <img className='back-button-img' src={require(`./images/left-arrow.PNG`)}/>
      </button>
      <div className="middle"></div>
      <div className="points">
        <img className="points-img" src={require('./images/points.webp')}/>
        <p className='points-text'>{points}</p>
      </div>
    </header>
    <main className="Pull">
      <div>
        <img src={require(`./images/claw-machine.PNG`)} className="claw-machine"></img>
      </div>
      <div>
        <button className="pull-button">Pull</button>
      </div>
    </main>
  </div>
  );
}

export default Pull;
