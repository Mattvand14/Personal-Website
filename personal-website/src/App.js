import React, { useState, useEffect } from 'react';
import './App.css'; // Import other component-specific styles

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("Dark Mode");

  useEffect(() => {
    // Update the body class when isBlackBackground changes
    if (isBlackBackground) {
      document.body.classList.add('black-background');
      setButtonTitle("Light Mode");
    } else {
      document.body.classList.remove('black-background');
      setButtonTitle("Dark Mode");
    }
  }, [isBlackBackground]);

  const toggleBackground = () => {
    setIsBlackBackground(!isBlackBackground);
  };

  return (
    <div className="App">
      <h1 className={isBlackBackground ? "header font-change" : "header"}>
        Matthew VanDeusen
      </h1>
      <img className='profile-pic' src="personal-website/src/profile.jpg" alt="" />
      <button className='dark-mode-button' onClick={toggleBackground}>
        {buttonTitle}
      </button>
    </div>
  );
}

export default App;



