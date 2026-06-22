import React from 'react';
import animals from './data';
import AnimalCard from './AnimalCard';
import './App.css';

// Import local animal images from assets
import lionImg from './assets/lion.jpg';
import gorillaImg from './assets/gorilla.jpg';
import zebraImg from './assets/zebra.jpg';

const imageMap = {
  Lion: lionImg,
  Gorilla: gorillaImg,
  Zebra: zebraImg
};

function App() {
  const showAdditionalData = (additional) => {
    const alertMsg = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(alertMsg);
  };

  return (
    <div className="app-container">
      <h1 className="main-title">Animals</h1>
      <div className="animals-grid">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            image={imageMap[animal.name]}
            additional={animal.additional}
            showAdditional={showAdditionalData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
