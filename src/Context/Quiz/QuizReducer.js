import {
  ADD_SURVEY_1,
  ADD_SURVEY_2,
  ADD_SURVEY_3,
  ADD_SURVEY_4,
  SURVERY_ERROR
} from "../types";


export default (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case ADD_SURVEY_1:
      return {
        ...state,
        survey1: [...state.survey1, action.payload],
      };
    case ADD_SURVEY_2:
      return {
        ...state,
        survey2: [...state.survey2, action.payload],
      };
    case ADD_SURVEY_3:
      return {
        ...state,
        survey3: [...state.survey3, action.payload],
      };
    case ADD_SURVEY_4:
      return {
        ...state,
        survey3: [...state.survey4, action.payload],
      };
    case SURVERY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
