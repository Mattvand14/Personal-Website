import React, { useState, useEffect } from 'react';
import './App.css';
import profileImage from './profile.jpg';
import audioFile1 from './music/1.mp3';
import audioFile2 from './music/2.mp3';
import audioFile3 from './music/3.mp3';
import audioFile4 from './music/4.mp3';
import audioFile5 from './music/5.mp3';
import audioFile6 from './music/6.mp3';


function Header({ isBlackBackground }) {
  return (
    <h1 className={isBlackBackground ? "header font-change" : "header"}>
      Matthew VanDeusen
    </h1>
  );
}

function ProfilePic({ profileImage }) {
  return <img className='profile-pic' src={profileImage} alt="" />;
}

function DarkModeButton({ onClick, buttonTitle }) {
  return (
    <button className='dark-mode-button' onClick={onClick}>
      {buttonTitle}
    </button>
  );
}

function Socials() {
  // Define social links data
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/mattvand14/' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/mattisasavage?si=130a0849ab654ebb' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@mattvand14?lang=en' }
    // Add more social links as needed
  ];

  return (
    <div className='socials-bar'>
      <h3>Contact Me:</h3>
      <ul>
        <li>Email: <a href="mailto:mattvand14@gmail.com">mattvand14@gmail.com</a></li>
        <li>Socials:</li>

        {/* Render social links */}
        {socialLinks.map((social, index) => (
          <li key={index}>
            <a href={social.url}>{social.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}


  function AudioFiles() {
    const audioFiles = [
      { src: audioFile1, className: 'audio1' },
      { src: audioFile2, className: 'audio2' },
      { src: audioFile3, className: 'audio3' },
      { src: audioFile4, className: 'audio4' },
      { src: audioFile5, className: 'audio5' },
      {src: audioFile6, className: 'audio6'}
    ];
  
    return (
      <div className="audio-files">
        {audioFiles.map((audio, index) => (
          <audio key={index} className={audio.className} controls>
            <source src={audio.src} type="audio/mp3" />
          </audio>
        ))}
      </div>
    );
  }

  function useDarkModeEffect() {
    const [isBlackBackground, setIsBlackBackground] = useState(true);
    const [buttonTitle, setButtonTitle] = useState("Dark Mode");
  
    React.useEffect(() => {
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
  
    return { isBlackBackground, buttonTitle, toggleBackground };
  }
  

  

  function App() {
    const { isBlackBackground, buttonTitle, toggleBackground } = useDarkModeEffect();

    return (
      <div className="App">
        <Header isBlackBackground={isBlackBackground} />
        <Socials />
        <ProfilePic profileImage={profileImage} />
        <DarkModeButton onClick={toggleBackground} buttonTitle={buttonTitle} />
        <AudioFiles /> 
      </div>
    );
  }

export default App;



