import React, { useState } from 'react';

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex-center-column">
      <h1 className="exercise-title">Render and Commit Demo</h1>
      <p className="demo-result-text">Count: {count}</p>
      <button className="btn-counter" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default RenderAndCommitDemo;
