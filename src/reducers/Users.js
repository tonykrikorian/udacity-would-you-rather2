import { GET_USERS, ADD_QUESTION_TO_USER } from "../actions/Shared";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.users };
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions,
            action.question.id,
          ],
        },
      };
    default:
      return state;
  }
}
