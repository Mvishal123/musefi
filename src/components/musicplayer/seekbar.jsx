"use client";

import React from "react";

const SeekBar = ({ playTime, duration, setSeekTime }) => {
  return (
    <div>
      <input
        type="range"
        className="w-full accent-purple-800"
        min={0}
        max={duration}
        value={playTime}
        onChange={(e) => {
          setSeekTime(e.target.value);
        }}
      />
    </div>
  );
};

export default SeekBar;
