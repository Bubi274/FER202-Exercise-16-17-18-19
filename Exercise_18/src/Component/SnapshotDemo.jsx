import React, { useState } from 'react';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSnapshot = () => {
    setSnapshot(count);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <div className="flex-center-column">
      <h1 className="exercise-title">State as a Snapshot Demo</h1>
      <p className="demo-result-text">Count: {count}</p>
      
      <div className="counter-actions">
        <button className="btn-counter" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn-counter" onClick={handleSnapshot}>
          Take Snapshot
        </button>
        <button 
          className="btn-counter" 
          onClick={handleRestore}
          disabled={snapshot === null}
          style={{ opacity: snapshot === null ? 0.5 : 1, cursor: snapshot === null ? 'not-allowed' : 'pointer' }}
        >
          Restore Snapshot
        </button>
      </div>

      {snapshot !== null && (
        <div style={{ marginTop: '10px', fontSize: '14px', color: '#aaaaaa' }}>
          Saved Snapshot: {snapshot}
        </div>
      )}
    </div>
  );
};

export default SnapshotDemo;
