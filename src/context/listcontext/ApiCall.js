import axios from "axios";
import {
  deleteListFailure,
  deleteListStart,
  deleteListSucces,
  getListsFailure,
  getListsStart,
  getListsSucces,
  postListFailure,
  postListStart,
  postListSucces,
  updateListFailure,
  updateListStart,
  updateListSucces,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(getListsSucces(res.data));
  } catch (e) {
    dispatch(getListsFailure());
  }
};

export const putList = async (id, list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axios.put("/lists/" + id, list,{
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(updateListSucces(res.data));
  } catch (e) {
    dispatch(updateListFailure());
  }
};

export const postList = async (list, dispatch) => {
  dispatch(postListStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(postListSucces(res.data));
  } catch (e) {
    dispatch(postListFailure());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(deleteListSucces(id));
  } catch (e) {
    dispatch(deleteListFailure());
  }
};
