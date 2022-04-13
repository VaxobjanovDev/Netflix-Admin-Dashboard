import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authcontext/Authcontext";
import { ListsContextProvider } from "./context/listcontext/ListContext";
import { MoviesContextProvider } from "./context/moviecontext/MoviesContext";
import { UsersContextProvider } from "./context/usercontext/UsersContext";

ReactDOM.render(
  <AuthContextProvider>
    <MoviesContextProvider>
      <ListsContextProvider>
        <UsersContextProvider>
          <App />
        </UsersContextProvider>
      </ListsContextProvider>
    </MoviesContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
