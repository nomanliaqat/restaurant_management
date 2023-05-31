import { postRequest, getRequest } from "../../utils/request";


export const getOrders = () => {
  return async (dispatch) => {
    await getRequest("/getorders")
      .then((result) => {
        result.order.sort((a, b) => b.order_id - a.order_id)
        dispatch({ type: "GET_ORDERS", payload: result.order });
      })
      .catch((err) => console.log(err));
  };
};

export const createOrder = (data, nevigate) => {
  return async (dispatch) => {
    await postRequest("/createorder", data)
      .then((result) => {
        localStorage.removeItem("cart");
        dispatch(getOrders());
        nevigate("/order-receipt")
        // dispatch({ type: "SAVE_ORDER_SUCCESS", payload: result });
      })
      .catch((err) => {
        dispatch(getOrders());
        localStorage.removeItem("cart");
        nevigate("/order-receipt")
        console.log(err)
      });
  };
};
