import { getUsers, getQuestions } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getQuestions as getQuestionsCreator } from "../actions/Questions";

export const GET_USERS = "GET_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
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

export function addQuestionToUser(question) {
  return {
    type: ADD_QUESTION_TO_USER,
    question,
  };
}
