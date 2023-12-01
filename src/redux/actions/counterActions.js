import { INCREMENT, DECREMENT } from "../actionTypes/actionTypes";

const increment = () => {
    console.log("iiiii")
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export {increment , decrement };