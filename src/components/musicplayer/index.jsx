"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  playPause,
  nextSong,
  prevSong,
} from "@/lib/redux/feature/musicSlice.jsx";

import Controls from "./controls.jsx";
import ArtistDetails from "./artist-details.jsx";
import Player from "./player.jsx";
import { useState } from "react";
import SeekBar from "./seekbar.jsx";

const Playerbar = () => {
  const dispatch = useDispatch();
  const { isPlaying, isActive, activeSong, currentSongIndex, currentSongs } =
    useSelector((state) => state.player);

  const [seekTime, setSeekTime] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  const [duration, setDuration] = useState(0);

  console.log(playTime + "/" + duration);

  const handlePlayPause = () => {
    dispatch(playPause());
  };
  const reset = () => {
    setPlayTime(0);
    setSeekTime(0);
    setDuration(0);
  };
  const handleNextSong = () => {
    reset();
    dispatch(playPause());
    dispatch(nextSong());
  };

  const handlePrevSong = () => {
    reset();
    dispatch(playPause());
    dispatch(prevSong());
  };

  return (
    <div
      className={`w-full absolute h-24 bottom-0 left-0 right-0 ${
        isActive ? "flex" : "hidden"
      } animate-slideup bg-gradient-to-b from-purple-500/50 to-black backdrop-blur-lg rounded-t-3xl z-10`}
    >
      <div className="w-full flex justify-between gap-6 md:px-6 lg:px-12 mt-4">
        <div className="hidden md:flex justify-start">
          <ArtistDetails activeSong={activeSong} />
        </div>
        <div className="flex-1">
          <div className="">
            <Controls
              isPlaying={isPlaying}
              isActive={isActive}
              activeSong={activeSong}
              currentSongIndex={currentSongIndex}
              currentSongs={currentSongs}
              handlePlayPause={handlePlayPause}
              handleNextSong={handleNextSong}
              handlePrevSong={handlePrevSong}
            />
            <SeekBar
              playTime={playTime}
              duration={duration}
              setSeekTime={setSeekTime}
            />
          </div>
          <Player
            activeSong={activeSong}
            isPlaying={isPlaying}
            setDuration={setDuration}
            setPlayTime={setPlayTime}
            playTime={playTime}
            seekTime={seekTime}
            handleNextSong={handleNextSong}
          />
        </div>
      </div>
    </div>
  );
};

export default Playerbar;
