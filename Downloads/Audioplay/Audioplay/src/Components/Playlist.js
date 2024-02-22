const Playlist = ({ audioFiles }) => {
  return (
    <div className="List">
      <ul>
        {audioFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Playlist;
