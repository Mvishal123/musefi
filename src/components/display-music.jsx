"use client";

import { useDispatch, useSelector } from "react-redux";
import MusicCard from "./music-card";
import { playPause, setCurrentSong } from "@/lib/redux/feature/musicSlice";

const DisplayMusic = () => {
  const { currentSongs, activeSong, isPlaying, currentSongIndex } = useSelector(
    (state) => state.player
  );

  console.log({ activeSong, isPlaying, currentSongIndex });
  const dispatch = useDispatch();

  const handlePlayPause = () => {
    dispatch(playPause());
  };

  const setCurrentSongHandler = (title) => {
    dispatch(setCurrentSong(title));
  };

  return (
    <div className="py-4">
      <div className="flex flex-wrap gap-6 lg:gap-12">
        {currentSongs.map((song, index) => (
          <MusicCard
            key={index}
            song={song}
            activeSong={activeSong}
            handlePlayPause={handlePlayPause}
            isPlaying={isPlaying}
            setCurrentSongHandler={setCurrentSongHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayMusic;
