import React from 'react';
import RenderAndCommitDemo from './Component/RenderAndCommitDemo';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <div className="app-container">
        <div className="exercises-list">
          <div className="dark-demo-box">
            <RenderAndCommitDemo />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
