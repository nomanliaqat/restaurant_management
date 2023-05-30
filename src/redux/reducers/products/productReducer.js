const initialState = {
  productsList: [],
  
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
      return { ...state, productsList: action.payload };
    default:
      return state;
  }
};
