import Image from "next/image";
import React from "react";

const ArtistDetails = ({ activeSong }) => {
  return (
    <div className="flex justify-start items-center gap-3">
      <div className="h-14 w-14 bg-slate-900 rounded-full  aspect-square ">
        {activeSong?.artistImage && (
          <Image
            src={activeSong.artistImage}
            alt="artist-image"
            width={500}
            height={500}
            className="w-full bg-contain rounded-full"
          />
        )}
      </div>
      <div>
        <h2 className="text-lg text-gray-200">{activeSong.title}</h2>
        <p className="text-sm text-gray-400">{activeSong.artist}</p>
      </div>
    </div>
  );
};

export default ArtistDetails;
