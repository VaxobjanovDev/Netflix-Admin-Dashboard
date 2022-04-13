export const moviesStart = () => ({
  type: "GET_MOVIES_START",
});

export const moviesSucces = (movies) => ({
  type: "GET_MOVIES_SUCCES",
  payload: movies,
});

export const moviesFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});

export const postMovieStart = () => ({
  type: "POST_MOVIES_START",
});

export const postMovieSucces = (movie) => ({
  type: "POST_MOVIES_SUCCES",
  payload: movie,
});

export const postMovieFailure = () => ({
  type: "POST_MOVIES_FAILURE",
});

export const updateMovieStart = () => ({
  type: "UPDATE_MOVIES_START",
});

export const updateMovieSucces = (movie) => ({
  type: "UPDATE_MOVIES_SUCCES",
  payload: movie,
});

export const updateMovieFailure = () => ({
  type: "UPDATE_MOVIES_FAILURE",
});

export const deleteMovieStart = () => ({
  type: "DELETE_MOVIES_START",
});

export const deleteMovieSucces = (id) => ({
  type: "DELETE_MOVIES_SUCCES",
  payload: id,
});

export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIES_FAILURE",
});
