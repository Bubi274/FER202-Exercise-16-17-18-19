import React, { useState } from 'react';

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex-center-column">
      <h1 className="exercise-title">Event Handling Demo</h1>
      <p className="demo-result-text">Count: {count}</p>
      <button className="btn-counter" onClick={handleButtonClick}>
        Increase Count
      </button>
    </div>
  );
};

export default EventHandlingDemo;
