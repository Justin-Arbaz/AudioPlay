import React, { useState, useEffect } from 'react';

  const AudioPlayer = ({ audioFiles }) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [audio] = useState(new Audio());

    useEffect(() => {
      if (audioFiles.length === 0) return;

      audio.src = audioFiles[currentTrackIndex].url;
      audio.play();

      audio.addEventListener("ended", () => {
        setCurrentTrackIndex(
          (prevIndex) => (prevIndex + 1) % audioFiles.length
        );
      });

      return () => {
        audio.removeEventListener("ended", () => {});
        audio.pause();
      };
    }, [audioFiles, currentTrackIndex, audio]);
    return (
      <div className='BodyBtn'>
        <h2>Now Playing: {audioFiles[currentTrackIndex]?.name}</h2>
        <button className='Btn' onClick={() => audio.play()}>Play</button>
        <button className='Btn1' onClick={() => audio.pause()}>Pause</button>
      </div>
    );
  };

export default AudioPlayer;
