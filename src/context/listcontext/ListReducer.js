const ListsReducer = (state, action) => {
  switch (action.type) {
    case "GET_LISTS_START":
      return {
        lists: [],
        isFetching: true,
        error: false,
      };
    case "GET_LISTS_SUCCES":
      return {
        lists: action.payload,
        isFetching: true,
        error: false,
      };
    case "GET_LISTS_FAILURE":
      return {
        lists: [],
        isFetching: false,
        error: true,
      };
      case "POST_LIST_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "POST_LIST_SUCCES":
        return {
          lists: [...state.lists, action.payload],
          isFetching: true,
          error: false,
        };
      case "POST_LIST_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };  
        case "UPDATED_LIST_START":
          return {
            ...state,
            isFetching: true,
            error: false,
          };
        case "UPDATED_LIST_SUCCES":
          return {
            lists: state.lists.map(
              (list) => list._id === action.payload._id && action.payload
            ),
            isFetching: true,
            error: false,
          };
        case "UPDATED_LIST_FAILURE":
          return {
            ...state,
            isFetching: false,
            error: true,
          };
    
        case "DELETE_LIST_START":
          return {
            ...state,
            isFetching: true,
            error: false,
          };
        case "DELETE_LIST_SUCCES":
          return {
            lists: state.lists.filter((list) => list._id !== action.payload.id),
            isFetching: true,
            error: false,
          };
        case "DELETE_LIST_FAILURE":
          return {
            ...state,
            isFetching: false,
            error: true,
          };
    default:
      return { ...state };
  }
};

export default ListsReducer;
