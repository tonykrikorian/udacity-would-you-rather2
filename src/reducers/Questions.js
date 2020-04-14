import { GET_QUESTIONS } from "../actions/Questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}
