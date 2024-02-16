export const SONG_SELECTED = "SONG_SELECTED";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const selectSong = (song) => {
  return {
    type: SONG_SELECTED,
    payload: song,
  };
};

export const toggleLike = (songId) => ({
  type: TOGGLE_LIKE,
  payload: songId,
});
