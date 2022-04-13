export const getUsersStart = () => ({
  type: "GET_USERS_START",
});

export const getUsersSucces = (users) => ({
  type: "GET_USERS_SUCCES",
  payload: users,
});

export const getUsersStatsSucces = (users) => ({
  type: "GET_USERSSTATS_SUCCES",
  payload: users,
});

export const getUsersFailure = () => ({
  type: "GET_USERS_FAILURE",
});

export const postUserStart = () => ({
  type: "POST_MOVIES_START",
});

export const postUserSucces = (user) => ({
  type: "POST_MOVIES_SUCCES",
  payload: user,
});

export const postUserFailure = () => ({
  type: "POST_MOVIES_FAILURE",
});

export const updateUserStart = () => ({
  type: "UPDATE_USER_START",
});

export const updateUserSucces = (user) => ({
  type: "UPDATE_USER_SUCCES",
  payload: user,
});

export const updateUserFailure = () => ({
  type: "UPDATE_USER_FAILURE",
});

export const deleteUserStart = () => ({
  type: "DELETE_MOVIES_START",
});

export const deleteUserSucces = (id) => ({
  type: "DELETE_MOVIES_SUCCES",
  payload: id,
});

export const deleteUserFailure = () => ({
  type: "DELETE_MOVIES_FAILURE",
});
