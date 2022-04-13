const UsersReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS_START":
      return {
        users: [],
        isFetching: true,
        error: false,
      };
    case "GET_USERS_SUCCES":
      return {
        users: action.payload,
        isFetching: true,
        error: false,
      };
      case "GET_USERSSTATS_SUCCES":
        return {
          users: state.users.sort(function(a,b){return a._id - b._id}),
          isFetching: true,
          error: false,
        };
    case "GET_USERS_FAILURE":
      return {
        users: [],
        isFetching: false,
        error: true,
      };

    case "POST_USER_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "POST_USER_SUCCES":
      return {
        users: [...state.movies, action.payload],
        isFetching: true,
        error: false,
      };
    case "POST_USER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATED_USER_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATED_USER_SUCCES":
      return {
        users: state.users.map(
          (user) => user._id === action.payload._id && action.payload
        ),
        isFetching: true,
        error: false,
      };
    case "UPDATED_USER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "DELETE_USERS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_USERS_SUCCES":
      return {
        users: state.users.filter((user) => user._id !== action.payload.id),
        isFetching: true,
        error: false,
      };
    case "DELETE_USERS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default UsersReducer;
