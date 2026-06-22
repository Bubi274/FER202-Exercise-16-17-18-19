import React from 'react';
import EventHandlingDemo from './EventHandlingDemo';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="exercises-list">
        <div className="dark-demo-box">
          <EventHandlingDemo />
        </div>
      </div>
    </div>
  );
};

export default App;
