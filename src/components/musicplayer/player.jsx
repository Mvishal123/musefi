"use client";
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const Player = ({
  activeSong,
  isPlaying,
  setDuration,
  setPlayTime,
  playTime,
  seekTime,
  handleNextSong,
}) => {
  const [mounted, setMounted] = useState(false);

  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.seekTo(seekTime);
    }
  }, [seekTime]);

  if (mounted) {
    return (
      <ReactPlayer
        playing={isPlaying}
        className="hidden"
        ref={ref}
        url={activeSong.songUrl}
        onProgress={(played) => {
          setPlayTime(played.playedSeconds);
        }}
        onDuration={(duration) => {
          setDuration(duration);
        }}
        onEnded={handleNextSong}
      />
    );
  } else {
    return null;
  }
};

export default Player;
