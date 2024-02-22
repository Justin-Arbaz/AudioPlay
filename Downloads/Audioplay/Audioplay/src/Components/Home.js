import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer'
import AudioUploader from './AudioUploader'
import Playlist from './Playlist'

const Home = () => {
  const [audioFiles, setAudioFiles] = useState([]);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setAudioFiles((prevFiles) => [...prevFiles, { name: file.name, url: reader.result }]);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem('audioFiles')) || [];
    setAudioFiles(storedFiles);
  }, []);

  useEffect(() => {
    localStorage.setItem('audioFiles', JSON.stringify(audioFiles));
  }, [audioFiles]);

  return (
    <>
      <h1>Audio Player</h1>
      <AudioUploader onFileUpload={handleFileUpload} />
      <Playlist  audioFiles={audioFiles} />
      <AudioPlayer audioFiles={audioFiles} />
    </>
  );
};

export default Home;
