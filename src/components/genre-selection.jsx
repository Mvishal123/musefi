"use client";

import { GENRES } from "@/lib/constants";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "@/lib/redux/feature/musicSlice";

const GenreSelection = () => {
  const { currentGenre } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const genre = GENRES.find((g) => g.value === currentGenre);
  console.log({ genre });

  const onSelectionChange = (e) => {
    dispatch(setGenre(e.target.value));
  };
  return (
    <select
      defaultValue={genre.value}
      onChange={onSelectionChange}
      className="p-1 text-black rounded"
    >
      {GENRES.map((genre) => (
        <option key={genre.genre} value={genre.value}>
          {genre.genre}
        </option>
      ))}
    </select>
  );
};

export default GenreSelection;
