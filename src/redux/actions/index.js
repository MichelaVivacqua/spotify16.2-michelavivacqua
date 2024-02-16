export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const toggleLike = (songId) => ({
  type: "TOGGLE_LIKE",
  payload: songId,
});
