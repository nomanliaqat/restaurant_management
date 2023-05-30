const initialState = {
  ordersList: [],
  isLoading: false,
  orderService: 'In-Store'
  
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER_SERVICE":
      return { ...state, orderService: action.payload };
    case "GET_ORDERS":
      return { ...state, ordersList: action.payload, isLoading: true };


    default:
      return state;
  }
};
