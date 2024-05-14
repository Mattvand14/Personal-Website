import React, { useState, useEffect } from 'react';
import './App.css';

//pics
import profileImage from './images/profile.jpg';
import guitarImage from './images/guitarTrans.png';
import guitarImage2 from './images/trans.png';
import blackGuitar from './images/blackGuitar.png';
import blackGuitarFlipped from './images/blackGuitarFlipped.png';
import jazzSample from './images/jazzSamplePic.jpeg';

//audio
import audioFile1 from './music/jazzSample.mp3';
import audioFile2 from './music/choirSample.mp3';
import audioFile3 from './music/relax.mp3';
import audioFile4 from './music/fleetingFeeling.mp3';
import audioFile5 from './music/movie.mp3';
import audioFile6 from './music/glass.mp3';
import medicine from './music/Medicine.mp3';



function Header({ isBlackBackground }) {
  return (
    <div className="header-container">
      <h1 className={isBlackBackground ? "header font-change" : "header"}>
        Matthew VanDeusen
      </h1>
    </div>
  );
}

// function DisplayMusicThumbnails({ images }) {
//   return (
//     <div className="thumbnail-grid">
//       {images.map((imageUrl, index) => (
//         <img key={index} src={imageUrl} alt={`Thumbnail ${index}`} className="thumbnail" />
//       ))}
//     </div>
//   );
// }


function GuitarDisplay({ isDarkMode }) {
  const [leftGuitarImage, setLeftGuitarImage] = useState(guitarImage);
  const [middleGuitarImage, setMiddleGuitarImage] = useState(guitarImage2);
  const [bottomGuitarImage, setBottomGuitarImage] = useState(guitarImage);

  useEffect(() => {
    // Update guitar images based on dark mode state
    if (isDarkMode) {
      setLeftGuitarImage(guitarImage);
      setMiddleGuitarImage(guitarImage2);
      setBottomGuitarImage(guitarImage);
    } else {
      setLeftGuitarImage(blackGuitar);
      setMiddleGuitarImage(blackGuitarFlipped);
      setBottomGuitarImage(blackGuitar);
    }
  }, [isDarkMode]);

  return (
    <div>
      <img src={leftGuitarImage} alt="Left Guitar" className="top-guitar" />
      <img src={middleGuitarImage} alt="Right Guitar" className="middle-guitar" />
      <img src={bottomGuitarImage} alt="Right Guitar" className="bottom-guitar" />
    </div>
  );
}


function ProfilePic({ profileImage, isDarkMode }) {
  return <img className={`profile-pic ${isDarkMode ? '' : 'black-border'}`} src={profileImage} alt="" />;
}


function DarkModeButton({ onClick, buttonTitle }) {
  return (
    <button className='dark-mode-button' onClick={onClick}>
      {buttonTitle}
    </button>
  );
}

function Socials({ isDarkMode }) {
  // Define social links data
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/mattvand14/' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/mattisasavage?si=130a0849ab654ebb' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@mattvand14?lang=en' }
    // Add more social links as needed
  ];

  return (
    <div className='socials-bar'>
      <ul>
        <li style = {{color: isDarkMode ? '': 'black'}}>Email: <a href="mailto:mattvand14@gmail.com" style = {{color: isDarkMode ? '': 'black'}}>mattvand14@gmail.com</a></li>
        <br />
        <li style = {{color: isDarkMode ? '': 'black'}}>Socials:</li>
  
        {/* Render social links */}
        {socialLinks.map((social, index) => (
          <li key={index}>
            <a href={social.url} style={{ color: isDarkMode ? '' : 'black' }}>{social.name}</a>
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
      {src: audioFile6, className: 'audio6'},
      {src: medicine, className: 'Medicine'}
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

  function MusicDisplay({isDarkMode}){
    // some sort of button or dropdown to display audio files

    return (
      <div className='music-display' >
        <AudioFiles/>
      </div>
    )
  }

  function BioDisplay(){
    //Biography
    return (
      <div className='biography'>
        <p>
          Music is something that I have grown up with and has had a huge influence on my life.
          Because of this I decided to create a website where I can upload music, videos, etc.
        </p>
      </div>

    )

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
    const [showMusicDisplay, setShowMusicDisplay] = useState(false);
  
    const images = [
      jazzSample
    ];


    const handleClick = () => {
      setShowMusicDisplay(!showMusicDisplay); // Toggle the value of showMusicDisplay
    };
  
    return (
      <div className={`App ${isBlackBackground ? 'dark-mode' : ''}`}>
        <Header isBlackBackground={isBlackBackground} />
        <GuitarDisplay isDarkMode={isBlackBackground} />
        <Socials isDarkMode={isBlackBackground} />
        <ProfilePic profileImage={profileImage} isDarkMode={isBlackBackground} />
        <DarkModeButton onClick={toggleBackground} buttonTitle={buttonTitle} />
        <button className='display-music-button' onClick={handleClick}>
          {showMusicDisplay ? "Hide Music" : "Show Music"}
        </button>
        {/* <DisplayMusicThumbnails images={images} /> */}
        {showMusicDisplay && <MusicDisplay />}
        {/* <BioDisplay/> */}
      </div>
    );
  }
  
  

export default App;



