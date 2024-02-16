const initialState = {
  songs: [],
};

const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE":
      return {
        ...state,
        songs: action.payload,
      };
    default:
      return state;
  }
};

export default likedReducer;
