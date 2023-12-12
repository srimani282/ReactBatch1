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
     // const updatedPosts = state.postData.filter((post, index) => index !== action.payload);
      const updatedPosts = state.postData.filter((post, index) => {
        return index !== action.payload
        });
      return {
        ...state,
        postData: updatedPosts,
      };
      
       
    default:
      return state;
  }
};
export default postReducer;