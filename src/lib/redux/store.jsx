"use client";

const { configureStore } = require("@reduxjs/toolkit");
import playerReducer from "./feature/musicSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
