import React from 'react';
import SnapshotDemo from './Component/SnapshotDemo';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <div className="app-container">
        <div className="exercises-list">
          <div className="dark-demo-box">
            <SnapshotDemo />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
