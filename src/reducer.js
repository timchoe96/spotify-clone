export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  track: null,
  index: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    case "SET_TRACK":
      return {
        ...state,
        track: action.track,
      };

    case "SET_INDEX":
      return {
        ...state,
        index: action.index,
      };

    default:
      return state;
  }
};

export default reducer;
