import { useReducer } from "react";
import { createContext } from "react";
import ListsReducer from "./ListReducer";

const initialState = {
  lists:[],
  isFetching: false,
  error: false,
};

export const ListsContext = createContext(initialState);

export const ListsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListsReducer, initialState);

  return (
    <ListsContext.Provider
      value={{
        lists: state.lists,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
