import { useReducer } from "react";
import { createContext } from "react";
import MoviesReducer from "./MoviesReducer";

const initialState = {
  movies:[],
  isFetching: false,
  error: false,
};

export const MoviesContext = createContext(initialState);

export const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
