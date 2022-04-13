import axios from "axios";
import { deleteMovieFailure, deleteMovieStart, deleteMovieSucces, moviesFailure, moviesStart, moviesSucces, postMovieFailure, postMovieStart, postMovieSucces, updateMovieFailure, updateMovieStart, updateMovieSucces } from "./MoviesActions";

export const getMovie = async (dispatch) => {
  dispatch(moviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(moviesSucces(res.data));
  } catch (e) {
    dispatch(moviesFailure());
  }
};

export const putMovie = async (dispatch,movie) => {
  dispatch(updateMovieStart());
  try {
    const res = await axios.post("/movies", movie,{
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(updateMovieSucces(res.data));
  } catch (e) {
    dispatch(updateMovieFailure());
  }
};

export const postMovie = async (dispatch,movie) => {
  dispatch(postMovieStart());
  try {
    const res = await axios.post("/movies", movie,{
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(postMovieSucces(res.data));
  } catch (e) {
    dispatch(postMovieFailure());
  }
};

export const deleteMovie = async (id,dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/"+ id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(deleteMovieSucces(id));
  } catch (e) {
    dispatch(deleteMovieFailure());
  }
};
