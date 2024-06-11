import React, { useState, useRef } from 'react';
import '../Css/StreamPlayer.css'


const StreamPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  
  const handleVolumeChange = (e) => {
    const volumeValue = parseFloat(e.target.value);
    setVolume(volumeValue);
    videoRef.current.volume = volumeValue;
  };
  

  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevents context menu (e.g., download options)
  };

  const handleClick = () => {
    // Disable pause/play when clicked
  };

  return (
    <div>
      <video 
	  height="0"
	  ref={videoRef} 
	  src={src}
      onContextMenu={handleContextMenu}
      onClick={handleClick}
	  disablePictureInPicture
	  >
		Your browser does not support the video tag. Please use a compatible browser.
	  </video>
	  
	  <div id="streamPlayer">
		<button onClick={togglePlay}>
		{isPlaying ? <img src="img/streamPlayerUI/pause.png" alt="Pause" /> : <img src="img/streamPlayerUI/play.png" alt="Play" />}
		</button>
		<input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
        />
	  </div>
      
    </div>
  );
};

export default StreamPlayer;
