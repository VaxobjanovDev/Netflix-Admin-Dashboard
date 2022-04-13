import { useReducer } from "react";
import { createContext } from "react";
import UsersReducer from "./UsersReducer";

const initialState = {
  users:[],
  isFetching: false,
  error: false,
};

export const UsersContext = createContext(initialState);

export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
