import { combineReducers } from "redux";
import RootReducer from "./RootReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: RootReducer,
  security: securityReducer
});
