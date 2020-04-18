import { saveQuestion } from "../utils/api";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function addQuestion(optionOneText, optionTwoText, author) {
  return {
    type: ADD_QUESTION,
    optionOneText,
    optionTwoText,
    author,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion();
  };
}
