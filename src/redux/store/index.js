import { configureStore, combineReducers } from "@reduxjs/toolkit";
import likedReducer from "../reducers/likedSong";
import selectedSongReducer from "../reducers/selectedSong";

const globalReducer = combineReducers({
  selectedSong: selectedSongReducer,
  songs: likedReducer,
});

const store = configureStore({ reducer: globalReducer });

export default store;
