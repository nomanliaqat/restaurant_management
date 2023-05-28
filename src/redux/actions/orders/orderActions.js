import { postRequest, patchRequest, getRequest } from "../../utils/request";


export const getOrders = () => {
  return async (dispatch) => {
    await getRequest("/")
      .then((result) => {
        dispatch({ type: "GET_ORDERS_SUCCESS", payload: result });
      })
      .catch((err) => console.log(err));
  };
};
