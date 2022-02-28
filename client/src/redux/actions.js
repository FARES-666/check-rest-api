import axios from "axios";
import { ADD, DELETE, EDIT, GET } from "./actionType";
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/users/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    alert("error");
  }
};
export const deleteUser = (_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/user/delete/${_id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    alert("error");
  }
};
export const addNewUser = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post("/user/add", newUser);
    dispatch({
      type: ADD,
      payload: res.data,
    });
  } catch (error) {
    alert("error");
  }
};
export const editUser = (editedUser) => async (dispatch) => {
  try {
    const res = await axios.put(`/user/put/${editedUser._id}`, editedUser);
    dispatch({
      type: EDIT,
      payload: res.data,
    });
  } catch (error) {
    alert("error");
  }
};
