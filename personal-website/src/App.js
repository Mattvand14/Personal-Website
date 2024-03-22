import React, { useState, useEffect } from 'react';
import './App.css'; // Import other component-specific styles

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  useEffect(() => {
    // Update the body class when isBlackBackground changes
    if (isBlackBackground) {
      document.body.classList.add('black-background');
    } else {
      document.body.classList.remove('black-background');
    }
  }, [isBlackBackground]);

  const toggleBackground = () => {
    setIsBlackBackground(!isBlackBackground);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={isBlackBackground ? "header font-change" : "header"}>
          Matthew VanDeusen
        </h1>
      </header>
      <button className='dark-mode-button' onClick={toggleBackground}>Dark Mode</button>
    </div>
  );
}

export default App;
