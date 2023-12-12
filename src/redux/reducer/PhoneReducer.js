
import * as types from "../actionTypes/actionTypes";

const initialState = {
  phoneCategories : [],
  smartphones: [],
  
};

const PhoneReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.SET_PHONE_CATEGORIES:
      return {
        ...state,
        phoneCategories: action.payload,
      };
    case types.SET_SMARTPHONES:
      return {
        ...state,
        smartphones: action.payload,
      };
    default:
      return state;
  }
};

export default PhoneReducer;
