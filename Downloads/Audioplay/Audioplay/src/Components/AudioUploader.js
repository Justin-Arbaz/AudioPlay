const AudioUploader = ({ onFileUpload }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    onFileUpload(file);
  };

  return (
    <div>
      <label>
        <input type="file" accept="audio/*" onChange={handleFileUpload} />
        <span>Audio Files Select</span>
      </label>
    </div>
  );
};
export default AudioUploader;
