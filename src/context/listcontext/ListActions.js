export const getListsStart = () => ({
  type: "GET_LISTS_START",
});

export const getListsSucces = (lists) => ({
  type: "GET_LISTS_SUCCES",
  payload: lists,
});

export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
});

export const postListStart = () => ({
  type: "POST_LIST_START",
});

export const postListSucces = (list) => ({
  type: "POST_LIST_SUCCES",
  payload: list,
});

export const postListFailure = () => ({
  type: "POST_LIST_FAILURE",
});

export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
});

export const updateListSucces = (list) => ({
  type: "UPDATE_LIST_SUCCES",
  payload: list,
});

export const updateListFailure = () => ({
  type: "UPDATE_LIST_FAILURE",
});

export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});

export const deleteListSucces = (id) => ({
  type: "DELETE_LIST_SUCCES",
  payload: id,
});

export const deleteListFailure = () => ({
  type: "DELETE_LIST_FAILURE",
});
