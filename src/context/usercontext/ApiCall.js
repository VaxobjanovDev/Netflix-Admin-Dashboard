import axios from "axios";
import { deleteUserFailure, deleteUserStart, deleteUserSucces, getUsersFailure, getUsersStart, getUsersSucces, updateUserFailure, updateUserStart, updateUserSucces } from "./UsersActions";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(getUsersSucces(res.data));
  } catch (e) {
    dispatch(getUsersFailure());
  }
};

export const getUsersStats = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/users/stats", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(getUsersSucces(res.data));
  } catch (e) {
    dispatch(getUsersFailure());
  }
};

export const putUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.put("/users/" + id, user,{
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(updateUserSucces(res.data));
  } catch (e) {
    dispatch(updateUserFailure());
  }
};

export const postUser = async (dispatch,user) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.post("/users", user,{
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(updateUserSucces(res.data));
  } catch (e) {
    dispatch(updateUserFailure());
  }
};

export const deleteUser = async (id,dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/users/"+ id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
      },
    });
    dispatch(deleteUserSucces(id));
  } catch (e) {
    dispatch(deleteUserFailure());
  }
};
