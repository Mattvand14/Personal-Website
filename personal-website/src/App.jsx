import React, { useState, useEffect } from 'react';
import './App.css';
import profileImage from './profile.jpg';
import audioFile1 from './music/1.mp3';
import audioFile2 from './music/2.mp3';
import audioFile3 from './music/3.mp3';
import audioFile4 from './music/4.mp3';
import audioFile5 from './music/5.mp3';




function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(true);
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
      
      {/*Images*/}
      <img className='profile-pic' src={profileImage} alt="" />

      {/*Dark/light mode button*/}
      <button className='dark-mode-button' onClick={toggleBackground}>
        {buttonTitle}
      </button>

      {/*Audio files*/}
      <audio className = 'audio1' controls>
        <source src={audioFile1} type="audio/mp3" />
      </audio>

      <audio className = 'audio2' controls>
        <source src={audioFile2} type="audio/mp3" />
      </audio>

      <audio className = 'audio3' controls>
        <source src={audioFile3} type="audio/mp3" />
      </audio>

      <audio className = 'audio4' controls>
        <source src={audioFile4} type="audio/mp3" />
      </audio>

      <audio className = 'audio5' controls>
        <source src={audioFile5} type="audio/mp3" />
      </audio>


    </div>
  );
}

export default App;



