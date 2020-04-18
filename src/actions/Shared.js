import { getUsers, getQuestions, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getQuestions as getQuestionsCreator } from "../actions/Questions";
import { addQuestionAnswer } from "../actions/Questions";

export const GET_USERS = "GET_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_USER_QUESTION_ANSWER = "ADD_USER_QUESTION_ANSWER";
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

export function addUserQuestionAnswer(authedUser, questionId, selectedOption) {
  return {
    type: ADD_USER_QUESTION_ANSWER,
    authedUser,
    questionId,
    selectedOption,
  };
}

export function handleAddQuestionAnswer(
  authedUser,
  questionId,
  selectedOption
) {
  return (dispatch) => {
    saveQuestionAnswer({
      authedUser,
      qid: questionId,
      answer: selectedOption,
    }).then(() => {
      dispatch(addQuestionAnswer(authedUser, questionId, selectedOption));
      dispatch(addUserQuestionAnswer(authedUser, questionId, selectedOption));
    });
  };
}
