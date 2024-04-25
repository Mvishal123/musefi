import Image from "next/image";
import React from "react";
import PausePlay from "./pause-play";

const MusicCard = ({
  song,
  activeSong,
  isPlaying,
  handlePlayPause,
  setCurrentSongHandler,
}) => {
  const isSongPlaying = song.title === activeSong.title;
  const setCurrentSong = () => {
    if (isSongPlaying) return;

    setCurrentSongHandler(song.title);
  };
  return (
    <div className=" group text-white w-[300px] p-2 bg-gray-400/20 backdrop-blur-md rounded">
      <div className="h-64 w-full relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-slate-900/90 ${
            isSongPlaying ? "flex" : "hidden"
          } justify-center items-center group-hover:flex`}
          onClick={setCurrentSong}
        >
          <PausePlay
            isPlaying={isSongPlaying ? isPlaying : false}
            handlePlayPause={handlePlayPause}
          />
        </div>
        <Image
          src={song.artistImage}
          width={200}
          height={200}
          className="w-full bg-cover bg-center"
          alt="artist-cover"
        />
      </div>
      <div className="mt-2">
        <h2 className="text-lg text-gray-300 font-normal">{song.title}</h2>
        <p className="text-sm text-gray-400">{song.artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;
