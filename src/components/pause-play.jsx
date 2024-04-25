import { FaPause, FaPlay } from "react-icons/fa";

const PausePlay = ({ handlePlayPause, isPlaying, isActive }) => {
  return (
    <div>
      {isPlaying ? (
        <FaPause
          onClick={handlePlayPause}
          className="text-2xl cursor-pointer text-white"
        />
      ) : (
        <FaPlay
          onClick={handlePlayPause}
          className="text-2xl cursor-pointer text-white"
        />
      )}
    </div>
  );
};

export default PausePlay;
