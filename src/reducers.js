const initialState = {
    selectedSize: null,
  };
  
  const productReducer = (state = initialState, action) => {
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
  
  export default productReducer;