import { combineReducers } from "redux";
import orders from "./orders";
import products from "./products";

const rootReducer = combineReducers({
  orders,
  products
});

export default rootReducer;
