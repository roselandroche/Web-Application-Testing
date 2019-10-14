import React, { useState } from 'react';
import './App.css';
import Display from './Display';
import Dashboard from './Dashboard';
import CheerButton from './Cheer';

function App() {
  const [strikes, updateStrikes] = useState(0);
  const [balls, updateBalls] = useState(0);
  const [fouls, updateFouls] = useState(0);
  const [hit, updateHit] = useState(false);

  return (
    <div className="App">
      <Display 
        ballCount={balls}
        strikeCount={strikes}
      />
      <Dashboard 
        strikes={strikes}
        updateStrikes={updateStrikes}
        balls={balls}
        updateBalls={updateBalls}
        fouls={fouls}
        updateFouls={updateFouls}
        hit={hit}
        updateHit={updateHit}
      />
      <CheerButton />
    </div>
  );
}

export default App;
