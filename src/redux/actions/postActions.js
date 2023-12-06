import { ADD_POST, DELETE_POST } from "../actionTypes/actionTypes";

const addPost = (data) => {
  return {
    type: ADD_POST,
    payload : data
  };
};

const deletePost = (data) => {
  return {
    type: DELETE_POST,
  };
};


export { addPost, deletePost};