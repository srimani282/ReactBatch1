import { INCREMENT, DECREMENT, ADD,DELETE } from "../actionTypes/actionTypes";

const initialState = {
  counter: 0,
  numbers : []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
       counter : state.counter + 2
      };

    case DECREMENT:
      return {
        ...state,
        counter : state.counter - 1
       };
    case ADD:
      // console.log(numbers.length,numbers,numbers.lenth > 0)
      const arr = state.numbers
      if(arr.length > 0){
        arr.push(arr[arr.length - 1] + 1) 
      }
      else {
        arr.push(1)
      }
      return {
        ...state,
        numbers : [...arr]
      }

    case DELETE:
      const arr2 = state.numbers
       arr2.pop()
        return {
          ...state,
          numbers : [...arr2]
        }
    default:
      return state;
  }
};
export default counterReducer;