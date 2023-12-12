import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducer/postReducer';
import PhoneReducer from './reducer/PhoneReducer';


const rootReducer = combineReducers({

  post: postReducer,
  phones: PhoneReducer,
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
