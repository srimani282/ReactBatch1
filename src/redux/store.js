import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer/counterReducer";
import postReducer from "./reducer/postReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    post: postReducer,
  });
  
  // Create store with combined reducers
const store = createStore(rootReducer);
  

export default store;