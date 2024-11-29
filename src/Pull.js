import React, { useState } from 'react';
import './Pull.css';

function Pull() {
  const [points, setPoints] = useState(100);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <button className="pull-button" onClick={openModal}>Pull</button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img className="modal-img" src={require('./images/pulled-pengu.PNG')}/>
            <div></div>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      </main>
  </div>
  );
}

export default Pull;
