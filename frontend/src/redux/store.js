import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//reducers
import cartReducer from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetail: getProductDetailsReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};
const store = createStore(
  reducer,
  INITAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
