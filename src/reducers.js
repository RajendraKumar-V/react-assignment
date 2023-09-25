const initialState = {
    selectedSize: null,
  };
  
  export const sizeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SIZE':
        return {
          ...state,
          selectedSize: action.payload,
        };
      default:
        return state;
    }
  };