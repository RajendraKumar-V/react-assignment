import { combineReducers } from 'redux';
import  sizeReducer  from './reducers';

const rootReducer = combineReducers({
  size: sizeReducer,
});

export default rootReducer;