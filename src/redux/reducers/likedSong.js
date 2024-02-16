const initialState = {
  songs: [],
};

const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE":
      return {
        ...state,
        songs: state.songs.map((song) =>
          song.id === action.payload ? { ...song, liked: !song.liked } : song
        ),
      };
    default:
      return state;
  }
};

export default likedReducer;
