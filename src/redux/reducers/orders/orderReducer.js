const initialState = {
  orders: {},
  orderService: 'In-Store'
  
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER_SERVICE":
      return { ...state, orderService: action.payload };
    case "GET_ORDERS":
      return { ...state, orders: action.payload };
    case "GET_ORDERS_SUCCESS":
      return { ...state, orders: action.payload };


    default:
      return state;
  }
};
