import { combineReducers } from "redux";
import Users from "./Users";
import AuthedUser from "./AuthedUser";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  Users,
  AuthedUser,
  loadingBar: loadingBarReducer,
});
