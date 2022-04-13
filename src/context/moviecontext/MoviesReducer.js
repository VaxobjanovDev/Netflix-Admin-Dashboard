const MoviesReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES_START":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "GET_MOVIES_SUCCES":
      return {
        movies: action.payload,
        isFetching: true,
        error: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };

    case "POST_MOVIES_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "POST_MOVIES_SUCCES":
      return {
        movies: [...state.movies, action.payload],
        isFetching: true,
        error: false,
      };
    case "POST_MOVIES_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATED_MOVIES_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATED_MOVIES_SUCCES":
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        isFetching: true,
        error: false,
      };
    case "UPDATED_MOVIES_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "DELETE_MOVIES_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_MOVIES_SUCCES":
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload.id),
        isFetching: true,
        error: false,
      };
    case "DELETE_MOVIES_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default MoviesReducer;
