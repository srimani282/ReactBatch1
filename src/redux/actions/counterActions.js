import { INCREMENT, DECREMENT, DELETE,ADD } from "../actionTypes/actionTypes";

const increment = () => {

  return {
    type: INCREMENT,
  };
};

const decremnent = () => {
  return {
    type: DECREMENT,
  };
};

const addNum = () => {
    
    return {
      type: ADD,
    };
  };

const deleteNum = () => {
    return {
      type: DELETE,
    };
  };

export { increment, decremnent , addNum, deleteNum};