import { ADD_POST, DELETE_POST } from "../actionTypes/actionTypes";

const initialState = {
  postData : []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
       postData : [...state.postData,action.payload]
      };

    case DELETE_POST:
      return {
        ...state,
        counter : state.counter - 1
       };
    default:
      return state;
  }
};
export default postReducer;