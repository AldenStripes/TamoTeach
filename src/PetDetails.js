import React from 'react';
import { useParams } from 'react-router-dom';
import './PetDetails.css';

function PetDetails() {
  const { id } = useParams();  // Extract pet ID from the URL
  const pets = [
    { id: 1, name: 'Jeff', rarity: 'Common', img: 'images/chippy.gif', description: 'Just a little guy with a love for adventure.' },
    { id: 2, name: 'Jag', rarity: 'Mythic', img: 'images/fraser-jaguar.gif', description: 'Jag claws and slashes his way through all.' },
    { id: 3, name: 'Shellie', rarity: 'Common', img: 'images/chipster.gif', description: 'Shellie is a common pet with a friendly personality.' },
  ];

  // Find the pet that matches the ID from the URL
  const pet = pets.find((pet) => pet.id.toString() === id);

  if (!pet) {
    return <div>Pet not found</div>;  // Display a message if the pet ID doesn't match any pet
  }

  const handleTrainButton = () => {
    alert('Training feature coming soon!');
  };

  return (
    <div className="pet-details">
      <div className="pet-details-container">
        <div className="pet-stats">
          <h2>{pet.name}</h2>
          <p><strong>Rarity:</strong> {pet.rarity}</p>
          <p><strong>Description:</strong> {pet.description}</p>
          <button onClick={handleTrainButton}>Train</button>
        </div>
        <div className="pet-img">
          <img
            src={require(`./${pet.img}`)}
            alt={pet.name}
            style={{ width: '300px', height: 'auto' }}
          />
        </div>
      </div>
      <button onClick={() => window.history.back()} style={{ marginTop: '20px' }}>Back to Home</button>
    </div>
  );
}

export default PetDetails;
