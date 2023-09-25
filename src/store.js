import { createStore } from 'redux';
import rootReducer from './rootReducer';

// Load the selected size from local storage
const savedSize = localStorage.getItem('selectedSize');
const initialState = {
  size: {
    selectedSize: savedSize || null,
  },
};

const store = createStore(rootReducer, initialState);

export default store;