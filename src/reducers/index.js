import { combineReducers } from "redux";
import Users from "./Users";
import AuthedUser from "./AuthedUser";
import { loadingBarReducer } from "react-redux-loading-bar";
import Questions from "./Questions";

export default combineReducers({
  Users,
  AuthedUser,
  Questions,
  loadingBar: loadingBarReducer,
});
