const initialState = {
  selectedSong: {},
};

const mainReducer = (state = initialState, action) => {
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

export default mainReducer;
