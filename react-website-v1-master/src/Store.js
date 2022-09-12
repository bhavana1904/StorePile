import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";

const initalState = {};
const middleware = [thunk];

let Store;

if (window.navigator.userAgent.includes("Chrome")) {
  Store = createStore(
    RootReducer,
    initalState,
    compose(
      applyMiddleware(...middleware),
     
    )
  );
} else {
  Store = createStore(
    RootReducer,
    initalState,
    compose(applyMiddleware(...middleware))
  );
}

export default Store;