import { postRequest, patchRequest, getRequest } from "../../utils/request";


export const getProducts = () => {
  return async (dispatch) => {
    await getRequest("/getproducts")
      .then((result) => {
        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: result.product });
      })
      .catch((err) => console.log(err));
  };
};
