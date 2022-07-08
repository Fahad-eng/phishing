import {
  GET_USER_INFO,
  USER_ERROR,
  GET_RETENTION_INFO
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        user: [action.payload],
      };

    case GET_RETENTION_INFO:
      return {
        ...state,
        retentionUser: [action.payload],
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
