import { getUsers, getQuestions } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getQuestions as getQuestionsCreator } from "../actions/Questions";

export const GET_USERS = "GET_USERS";

function getUsersActionCreator(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([getUsers(), getQuestions()]).then(
      ([users, questions]) => {
        dispatch(getUsersActionCreator(users));
        dispatch(getQuestionsCreator(questions));
        dispatch(hideLoading());
      }
    );
  };
}

// export function handleGetUsers() {
//   return (dispatch) => {
//     dispatch(showLoading());
//     return getUsers().then((users) => {
//       dispatch(getUsersActionCreator(users));
//       dispatch()
//       dispatch(hideLoading());
//     });
//   };
// }
