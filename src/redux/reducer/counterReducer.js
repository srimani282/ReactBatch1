import { TITLE, SUBTITLE, DESCRIPTION } from "../actionTypes/actionTypes";

const initialState = {
  title: "",
  subtitle: "",
  description: "",
};

const countertReducer = (state = initialState, action) => {
  console.log(action,"iiii");
  switch (action.type) {
    case TITLE:
      return {
        ...state,
        title: action.payload,
      };

    case SUBTITLE:
      return {
        ...state,
        subtitle: action.payload,
      };
      case DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    default:
      return state;
  }
};
export default countertReducer;