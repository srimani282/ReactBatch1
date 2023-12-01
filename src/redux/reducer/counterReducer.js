import { INCREMENT, DECREMENT } from "../actionTypes/actionTypes";

const initialState = {
  counter: 0,
};

const countertReducer = (state = initialState, action) => {
  console.log(action,"iiii");
  switch (action.type) {
    case INCREMENT:
      return {
     counter :state.counter+1
      };

    case DECREMENT:
      return {
        counter :state.counter-1
      };
    default:
      return state;
  }
};
export default countertReducer;