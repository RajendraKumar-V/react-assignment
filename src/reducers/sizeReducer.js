const initialState = {
    size: 'medium', // Default size
  };
  
  const sizeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SIZE':
        return {
          ...state,
          size: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default sizeReducer;