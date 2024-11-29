import React, { useState } from 'react';

function Battle() {
  const [points, setPoints] = useState(100);
  
  return (
    <div>
      <header className="Home-header">
        <div className="points">
          <h1>Points: {points}</h1>
        </div>
      </header>
      <h1>
        Battle Page - coming soon
      </h1>
    </div>
  );

}

export default Battle;