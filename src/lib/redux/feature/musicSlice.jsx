"use client";

import { SONGS } from "@/lib/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isActive: false,
  currentSongs: SONGS,
  currentSongIndex: 0,
  activeSong: {},
  currentGenre: "ALL",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playPause: (state, action) => {
      state.isActive = true;
      state.isPlaying = !state.isPlaying;
    },

    nextSong: (state, action) => {
      if (state.currentSongIndex === state.currentSongs.length - 1) {
        state.currentSongIndex = 0;
      } else {
        state.currentSongIndex += 1;
      }

      state.activeSong = state.currentSongs[state.currentSongIndex];
      state.isPlaying = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongIndex === 0) {
        state.currentSongIndex = state.currentSongs.length - 1;
      } else {
        state.currentSongIndex -= 1;
      }

      state.activeSong = state.currentSongs[state.currentSongIndex];
      state.isPlaying = true;
    },

    setCurrentSong: (state, action) => {
      const song = state.currentSongs.find(
        (song) => song.title === action.payload
      );
      state.activeSong = song;

      const index = state.currentSongs.findIndex(
        (song) => song.title === action.payload
      );
      state.currentSongIndex = index;
      state.isActive = true;
      state.isPlaying = true;
    },

    setGenre: (state, action) => {
      state.currentGenre = action.payload;
    },
  },
});

export const { playPause, nextSong, prevSong, setGenre, setCurrentSong } =
  playerSlice.actions;
export default playerSlice.reducer;
