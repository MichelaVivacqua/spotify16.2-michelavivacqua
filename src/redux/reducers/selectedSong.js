const initialState = {
  selectedSong: [],
};

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return {
        ...state,
        selectedSong: action.payload,
      };
    default:
      return state;
  }
};

export default selectedSongReducer;
